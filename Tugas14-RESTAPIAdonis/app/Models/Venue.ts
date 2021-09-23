import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'

export default class Venue extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public phone: string

  @hasMany(() => Field,{
    foreignKey: 'venue_id', 
  })
  public venue_id: HasMany<typeof Field>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
