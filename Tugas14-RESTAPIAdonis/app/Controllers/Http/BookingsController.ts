import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
import Field from 'App/Models/Field'
import Schedule from 'App/Models/Schedule'

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

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }

  public async join({request,response,params,auth}:HttpContextContract){
    const booking = await Booking.findOrFail(params.id)
    let user = auth.user!

    await booking.related('players').sync([user.id],false)
    
    return response.ok({status: "success" , data: "berhasil join booking"})
  }
}
