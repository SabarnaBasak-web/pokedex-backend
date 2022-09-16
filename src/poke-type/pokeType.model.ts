import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Pokemon } from 'src/pokemon/Pokemon.model';

@Table
export class PokeTypeModel extends Model<PokeTypeModel> {
  @ForeignKey(() => Pokemon)
  @Column
  type: string;
}
