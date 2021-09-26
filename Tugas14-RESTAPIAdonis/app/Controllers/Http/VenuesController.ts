import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateVenueValidator from 'App/Validators/CreateVenueValidator'
import Venue from 'App/Models/Venue'
import Field from 'App/Models/Field'

export default class VenuesController {
    public async store({request,response,auth}:HttpContextContract){
        try {
            let data = await request.validate(CreateVenueValidator)
            // let newVenueId = await Database.table('venues').returning('id').insert({
            //     name : request.input('name'),
            //     phone: request.input('phone'),
            //     address: request.input('address')
            // })
            let venue = new Venue()
            venue.name = data.name
            venue.phone = data.phone
            venue.address = data.address

            const authUser =auth.user
            await authUser?.related('venues').save(venue)
            response.created({message: 'created'})
        } catch (error) {
            console.log(error);
            response.unprocessableEntity({errors : error.messages});
        }
    }
    public async index({request,response}:HttpContextContract){
        // if(request.qs().name){
        //     let name = request.qs().name
        //     // let venuesFilter = await Database.from('venues').select('id','name','phone','address').where('name',name)
        //     let venues = await Venue.findBy('name',name)
        //     return response.status(200).json({message: 'success get venues', data : venues})
        // }
        // let venues = await Database.from('venues').select('id','name','phone','address')
        let venues = await Venue.query().preload('author')
        return response.status(200).json({message: 'success get venues', data : venues})
    }
    public async show({params,response}:HttpContextContract){
        let venue = await Database.from('venues').where('id',params.id).select('id','name','phone','address').firstOrFail()
        // let venue = await Venue.find(params.id)
        // const bookings = await Field.query().preload('myBooking').select().where('venue_id',params.id)
        // const field = await Field.findByOrFail('venue_id',params.id)
        // const venue = await Venue.findByOrFail('id',params.id)
        // console.log(field);
        
        // const gabung = {...bookings,...venue.$original}
        return response.ok({message: 'berhasil get data venue by id', data: venue})
    }
    public async update({request,response,params}:HttpContextContract){
        // let id = params.id;
        // let affectedRows = await Database.from('venues').where('id',id).update({
        //     name : request.input('name'),
        //     phone: request.input('phone'),
        //     address: request.input('address')
        // })
        let venue = await Venue.findOrFail(params.id)
        venue.name = request.input('name')
        venue.address = request.input('address')
        venue.phone = request.input('phone')
        await venue.save()

        return response.ok({message : 'updated!'})
    }
    public async destroy({params,response}:HttpContextContract){
        // await Database.from('venues').where('id',params.id).delete()
        let venue = await Venue.findOrFail(params.id)
        await venue.delete()
        return response.ok({message : 'deleted'})
    }
}
