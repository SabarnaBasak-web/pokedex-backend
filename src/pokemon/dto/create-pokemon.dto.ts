import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePokemonDTO {
  @Field()
  name: string;
  @Field()
  type: string;
  @Field()
  skills: string;
}
