import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { PokeTypeModel } from 'src/poke-type/pokeType.model';
import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { Pokemon } from './Pokemon.model';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon) private pokemonModel: typeof Pokemon,
    @InjectModel(PokeTypeModel) private pokeType: typeof PokeTypeModel,
  ) {}

  async getAllPokemon(): Promise<Pokemon[]> {
    const response = await this.pokemonModel.findAll<Pokemon>();
    return response;
  }

  async getAllPokemonByType(type: string): Promise<Pokemon[]> {
    const response = await this.pokemonModel.findAll<Pokemon>({
      where: {
        type: type,
      },
    });

    return response;
  }

  async createPokemonEntry(
    createPokemonDto: CreatePokemonDTO,
  ): Promise<Pokemon> {
    const { type } = createPokemonDto;
    const isTypeExists = await this.pokeType.findAll({
      where: {
        type: {
          [Op.eq]: type,
        },
      },
    });
    if (isTypeExists.length) {
      return this.pokemonModel.create(createPokemonDto);
    } else {
      throw new NotFoundException({
        message: 'Type does not exists! Please add type first',
      });
    }
  }
}
