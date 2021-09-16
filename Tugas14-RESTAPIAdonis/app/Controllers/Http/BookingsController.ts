import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator';

export default class BookingsController {
    public async store({request,response}:HttpContextContract){
        try {
            const payload = await request.validate(CreateBookingValidator)
        } catch (error) {
            response.unprocessableEntity({errors : error.messages});
        }
    }
}

