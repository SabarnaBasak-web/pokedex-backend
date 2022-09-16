import { Injectable, NotFoundException } from '@nestjs/common';
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

  async updatePokeType(id: number, type: string): Promise<boolean> {
    const updatedRows = await this.pokeTypeModel.update(
      { type },
      { where: { id } },
    );

    if (updatedRows[0] > 0) {
      return true;
    } else {
      throw new NotFoundException({ message: "Id doesn't exists" });
    }
  }
}
