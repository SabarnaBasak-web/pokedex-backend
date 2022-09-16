import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { PokeTypeModel } from 'src/poke-type/pokeType.model';

@Table
export class Pokemon extends Model<Pokemon> {
  @Column
  name: string;
  @Column
  type: string;
  @Column
  skills: string;
}
