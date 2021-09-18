import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Casts extends BaseSchema {
  protected tableName = 'casts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('actors_id').unsigned().references('actors.id')
      table.integer('movies_id').unsigned().references('movies.id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
