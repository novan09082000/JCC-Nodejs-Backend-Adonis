import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateFieldValidator from 'App/Validators/CreateFieldValidator'

export default class FieldsController {
    public async store({request,response,params}:HttpContextContract){
        try {
            await request.validate(CreateFieldValidator)
            let newFieldId = await Database.table('fields').returning('id').insert({
                name : request.input('name'),
                type: request.input('type'),
                venue_id: params.venue_id
            })
            response.created({message: 'created', newId : newFieldId})
        } catch (error) {
            response.unprocessableEntity({errors : error.messages});
        }
    }
    public async index({response,params}:HttpContextContract){
        let fields = await Database
        .from('fields')
        .join('venues', 'venues.id', '=', 'fields.venue_id')
        .select('fields.*')
        .select('venues.name as nama_venue','venues.phone','venues.address')
        .where('fields.venue_id',params.venue_id)
        
        if(fields.length == 0){
            response.badRequest({error: 'venue id yang dicari tidak ada'})
        }else{
            return response.status(200).json({message: 'success get field', data : fields})
        }
        
    }
    public async show({params,response}:HttpContextContract){
        let field = await Database
        .from('fields')
        .join('venues', 'venues.id', '=', 'fields.venue_id')
        .select('fields.*')
        .select('venues.name as nama_venue','venues.phone','venues.address')
        .where('fields.venue_id',params.venue_id)
        .where('fields.id',params.id)
        .firstOrFail()
        return response.ok({message: 'success get fields with id', data: field})
    }
    public async update({request,response,params}:HttpContextContract){
        let id = params.id;
        let affectedRows = await Database.from('fields').where('id',id).update({
            name : request.input('name'),
            type: request.input('phone'),
            venue_id: params.venue_id
        })
        return response.ok({message : 'updated!', data: affectedRows})
    }
    public async destroy({params,response}:HttpContextContract){
        await Database.from('fields').where('id',params.id).where('venue_id',params.venue_id).delete()
        return response.ok({message : 'deleted'})
    }
}
