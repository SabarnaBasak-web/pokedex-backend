import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PokeTypeService } from './poke-type.service';
import { PokeType } from './Poketype.type';

@Resolver((of) => PokeType)
export class PokeTypeResolver {
  constructor(private pokeTypeService: PokeTypeService) {}
  @Query((returns) => [PokeType])
  async getAllPokemonType() {
    return this.pokeTypeService.getAllPokemonTypes();
  }

  @Mutation((returns) => PokeType)
  async addPokemonType(@Args('type') type: string) {
    return this.pokeTypeService.addPokemonType(type);
  }
}
