import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
import Field from 'App/Models/Field'
import Schedule from 'App/Models/Schedule'
import Database from '@ioc:Adonis/Lucid/Database'

import FormBookingValidator from 'App/Validators/FormBookingValidator'

export default class BookingsController {
  public async index ({response}: HttpContextContract) {
    const bookings = await Booking.query().preload('field').preload('bookingUser')
    return response.ok({message: 'success fetch articles', data : bookings})
  }

  public async store ({request,params,response,auth}: HttpContextContract) {
    const field = await Field.findByOrFail('id',params.field_id)
    const user = await auth.user!
    const payload = await request.validate(FormBookingValidator)

    const booking = new Booking()
    booking.playDateStart = payload.play_date_start
    booking.playDateEnd = payload.play_date_end
    booking.title = payload.title
    booking.userId = user.id


    booking.related('field').associate(field)
    
    return response.created({message: 'berhasil booking', data: booking})

  }

  public async show ({response,params}: HttpContextContract) {
    const booking = await Booking.query().select('id','title','play_date_start','play_date_end').where('id',params.id).preload('players', (queryBooking) => queryBooking.select(['id','name','email'])).firstOrFail()
    const player_count = await Booking.query().select('id','title','play_date_start','play_date_end').where('id',params.id).preload('players', (queryBooking) => queryBooking.select(['id','name','email'])).withCount('players').firstOrFail()
    let tampung = {...booking.$original, player_count: player_count.$extras.players_count, ...booking.$preloaded}
    return response.ok({message: 'success fetch articles', data : tampung})
  }

  public async update ({params,request,response}: HttpContextContract) {
    let id = params.id;
        // let affectedRows = await Database.from('fields').where('id',id).update({
        //     name : request.input('name'),
        //     type: request.input('phone'),
        //     venue_id: params.venue_id
        // })

        let booking = await Booking.findByOrFail('id',id)
            booking.title = request.input('title')
            booking.playDateStart = request.input('play_date_start')
            booking.playDateEnd = request.input('play_date_end')
        booking.save()
        return response.ok({message : 'updated!'})
  }

  public async destroy ({params,response}: HttpContextContract) {
    await Booking.query().where('id',params.id).where('field_id',params.field_id).delete()
    return response.ok({message : 'deleted'})
  }

  public async join({request,response,params,auth}:HttpContextContract){
    const booking = await Booking.findOrFail(params.id)
    let user = auth.user!

    await booking.related('players').sync([user.id],false)
    
    return response.ok({status: "success" , data: "berhasil join booking"})
  }

  public async unjoin({response,params,auth}:HttpContextContract){
    const booking = await Booking.findOrFail(params.id)
    let user = auth.user!
    await booking.related('players').detach([user.id])

    return response.ok({status: "success" , data: "berhasil unjoin booking"})
  }

  public async schedule({response,auth}:HttpContextContract){
    const user = await auth.user?.id
    const user_id = user!
    const schedules = await Schedule.query().preload('myBooking').select('*').where('user_id',user_id)
    return response.ok({message: 'success fetch articles', data : schedules})
  }
}
