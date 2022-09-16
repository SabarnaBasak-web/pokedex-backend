import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { Pokemon } from './Pokemon.model';

@Injectable()
export class PokemonService {
  constructor(@InjectModel(Pokemon) private pokemonModel: typeof Pokemon) {}

  async getAllPokemon(): Promise<Pokemon[]> {
    const response = await this.pokemonModel.findAll<Pokemon>();
    console.log('all Pokemons', response);
    return response;
  }

  async createPokemonEntry(
    createPokemonDto: CreatePokemonDTO,
  ): Promise<Pokemon> {
    return this.pokemonModel.create(createPokemonDto);
  }
}
