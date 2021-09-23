import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateVenueValidator from 'App/Validators/CreateVenueValidator'
import Venue from 'App/Models/Venue'

export default class VenuesController {
    public async store({request,response}:HttpContextContract){
        try {
            await request.validate(CreateVenueValidator)
            // let newVenueId = await Database.table('venues').returning('id').insert({
            //     name : request.input('name'),
            //     phone: request.input('phone'),
            //     address: request.input('address')
            // })
            let venue = new Venue()
            venue.name = request.input('name')
            venue.phone = request.input('phone')
            venue.address = request.input('address')
            venue.save()

            response.created({message: 'created'})
        } catch (error) {
            response.unprocessableEntity({errors : error.messages});
        }
    }
    public async index({request,response}:HttpContextContract){
        if(request.qs().name){
            let name = request.qs().name
            // let venuesFilter = await Database.from('venues').select('id','name','phone','address').where('name',name)
            let venues = await Venue.findBy('name',name)
            return response.status(200).json({message: 'success get venues', data : venues})
        }
        // let venues = await Database.from('venues').select('id','name','phone','address')
        let venues = await Venue.all()
        return response.status(200).json({message: 'success get venues', data : venues})
    }
    public async show({params,response}:HttpContextContract){
        // let venue = await Database.from('venues').where('id',params.id).select('id','name','phone','address').firstOrFail()
        let venue = await Venue.find(params.id)
        return response.ok({message: 'success get venues with id', data: venue})
    }
    public async update({request,response,params}:HttpContextContract){
        let id = params.id;
        // let affectedRows = await Database.from('venues').where('id',id).update({
        //     name : request.input('name'),
        //     phone: request.input('phone'),
        //     address: request.input('address')
        // })
        let venue = await Venue.findOrFail(id)
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
