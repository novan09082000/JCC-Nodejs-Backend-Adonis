import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateVenueValidator from 'App/Validators/CreateVenueValidator'

export default class VenuesController {
    public async store({request,response}:HttpContextContract){
        try {
            const payload = await request.validate(CreateVenueValidator)
        } catch (error) {
            response.unprocessableEntity({errors : error.messages});
        }
    }
}
