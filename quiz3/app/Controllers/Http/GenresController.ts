import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateGenreValidator from 'App/Validators/CreateGenreValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
  public async index ({request,response}: HttpContextContract) {
  if(request.qs().name){
      let name = request.qs().name
      let genresFilter = await Database.from('genres').select('id','name').where('name',name)
      return response.status(200).json({message: 'success get genrs', data : genresFilter})
  }
  let genres = await Database.from('genres').select('id','name')
  if(genres.length == 0){
    return response.badRequest();
  }else{
    return response.status(200).json({message: 'success get genres', data : genres})
  }
  }

  public async store ({request,response}: HttpContextContract) {
    try {
      await request.validate(CreateGenreValidator)
      let newGenreId = await Database.table('genres').returning('id').insert({
          name : request.input('name'),
      })
      response.created({message: 'created', newId : newGenreId})
  } catch (error) {
      response.unprocessableEntity({errors : error.messages});
  }
  }

  public async show ({params,response}: HttpContextContract) {
    // let genre = await Database.from('genres').where('id',params.id).select('id','name').firstOrFail()
    //     return response.ok({message: 'success get genress with id', data: genre})
    let genres = await Database
        .from('movies')
        .join('genres', 'genres.id', '=', 'movies.genres_id')
        .select('genres.id','genres.name','movies.* ')
        // .select('genres.name as genre')
        .where('genres.id',params.id)
        if(genres.length == 0){
            response.badRequest({error: 'movie id yang dicari tidak ada'})
        }else{
            return response.status(200).json({message: 'success get movies with id', data : genres})
        }
  }

  public async update ({request,response,params}: HttpContextContract) {
    let id = params.id;
        let affectedRows = await Database.from('genres').where('id',id).update({
            name : request.input('name'),
        })
        return response.ok({message : 'updated!', data: affectedRows})
  }

  public async destroy ({params,response}: HttpContextContract) {
    await Database.from('genres').where('id',params.id).delete()
    return response.ok({message : 'deleted'})
  }
}
