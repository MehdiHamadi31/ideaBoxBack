import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Member from './Member'
import Vote from './Vote'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public memberId: number

  @column()
  public title: string

  @column()
  public description: string

  @hasMany(() => Vote)
  public votes: HasMany<typeof Vote>

  @belongsTo(() => Member)
  public member: BelongsTo<typeof Member>
}
