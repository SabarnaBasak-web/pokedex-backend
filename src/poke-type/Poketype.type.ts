import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('PokeType')
export class PokeType {
  @Field((type) => ID)
  id: string;

  @Field()
  type: string;
}
