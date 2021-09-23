// import Venue from './Venue'
import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: string

  // @hasMany(() => Venue,{
  //   foreignKey: 'id'
  // })
  // public venue_id: HasMany<typeof Venue>

  @column()
  public venue_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
