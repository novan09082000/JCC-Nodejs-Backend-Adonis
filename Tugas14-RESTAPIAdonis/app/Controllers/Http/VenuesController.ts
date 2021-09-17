import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import CreateVenueValidator from 'App/Validators/CreateVenueValidator'

export default class VenuesController {
    public async store({request,response}:HttpContextContract){
        try {
            await request.validate(CreateVenueValidator)
            let newVenueId = await Database.table('venues').returning('id').insert({
                name : request.input('name'),
                phone: request.input('phone'),
                address: request.input('address')
            })
            response.created({message: 'created', newId : newVenueId})
        } catch (error) {
            response.unprocessableEntity({errors : error.messages});
        }
    }
    public async index({request,response}:HttpContextContract){
        if(request.qs().name){
            let name = request.qs().name
            let venuesFilter = await Database.from('venues').select('id','name','phone','address').where('name',name)
            return response.status(200).json({message: 'success get venues', data : venuesFilter})
        }
        let venues = await Database.from('venues').select('id','name','phone','address')
        return response.status(200).json({message: 'success get venues', data : venues})
    }
    public async show({params,response}:HttpContextContract){
        let venue = await Database.from('venues').where('id',params.id).select('id','name','phone','address').firstOrFail()
        return response.ok({message: 'success get venues with id', data: venue})
    }
    public async update({request,response,params}:HttpContextContract){
        let id = params.id;
        let affectedRows = await Database.from('venues').where('id',id).update({
            name : request.input('name'),
            phone: request.input('phone'),
            address: request.input('address')
        })
        return response.ok({message : 'updated!', data: affectedRows})
    }
    public async destroy({params,response}:HttpContextContract){
        await Database.from('venues').where('id',params.id).delete()
        return response.ok({message : 'deleted'})
    }
}
