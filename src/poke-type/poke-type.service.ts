import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PokeTypeModel } from './pokeType.model';

@Injectable()
export class PokeTypeService {
  constructor(
    @InjectModel(PokeTypeModel) private pokeTypeModel: typeof PokeTypeModel,
  ) {}

  async getAllPokemonTypes(): Promise<PokeTypeModel[]> {
    return await this.pokeTypeModel.findAll();
  }

  async addPokemonType(type: string): Promise<PokeTypeModel> {
    return await this.pokeTypeModel.create({ type });
  }
}
