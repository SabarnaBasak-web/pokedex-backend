import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './Pokemon.type';

@Resolver((of) => Pokemon)
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}
  @Query((returns) => Pokemon)
  async getAllPokemons() {
    return this.pokemonService.getAllPokemon();
  }

  @Mutation((returns) => Pokemon)
  async addPokemon(
    @Args('createPokemonDTO') createPokemondto: CreatePokemonDTO,
  ) {
    return this.pokemonService.createPokemonEntry(createPokemondto);
  }
}
