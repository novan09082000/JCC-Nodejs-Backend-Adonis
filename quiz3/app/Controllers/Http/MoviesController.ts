import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateMovieValidator from 'App/Validators/CreateMovieValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
  public async index ({response}: HttpContextContract) {
    let movies = await Database
        .from('movies')
        .join('genres', 'genres.id', '=', 'movies.genres_id')
        .select('movies.id','movies.title','movies.release_date')
        .select('genres.name as genre')
        if(movies.length == 0){
            response.badRequest({error: 'movie id yang dicari tidak ada'})
        }else{
            return response.status(200).json({message: 'success get movies', data : movies})
        }
  }
  public async store ({request,response}: HttpContextContract) {
    try {
      await request.validate(CreateMovieValidator)
      let newMovieId = await Database.table('movies').returning('id').insert({
          title : request.input('title'),
          resume: request.input('resume'),
          release_date: request.input('release_date'),
          genres_id: request.input('genres_id'),
      })
      response.created({message: 'created', newId : newMovieId})
  } catch (error) {
      response.unprocessableEntity({errors : error.messages});
  }
  }

  public async show ({response,params}: HttpContextContract) {
    let movies = await Database
        .from('movies')
        .join('genres', 'genres.id', '=', 'movies.genres_id')
        .select('movies.id','movies.title','movies.release_date')
        .select('genres.name as genre')
        .where('movies.id',params.id)
        if(movies.length == 0){
            response.badRequest({error: 'movie id yang dicari tidak ada'})
        }else{
            return response.status(200).json({message: 'success get movies with id', data : movies})
        }
  }

  public async update ({request,response,params}: HttpContextContract) {
    let id = params.id;
        let affectedRows = await Database.from('movies').where('id',id).update({
          title : request.input('title'),
          resume: request.input('resume'),
          release_date: request.input('release_date'),
        })
        return response.ok({message : 'updated!', data: affectedRows})
  }

  public async destroy ({params,response}: HttpContextContract) {
    await Database.from('movies').where('id',params.id).delete()
        return response.ok({message : 'deleted'})
    }
  }

