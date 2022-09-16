import { Field, InputType } from '@nestjs/graphql';
import { PokeTypeModel } from 'src/poke-type/pokeType.model';

@InputType()
export class CreatePokemonDTO {
  @Field()
  name: string;
  @Field()
  type: string;
  @Field()
  skills: string;
}
