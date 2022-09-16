import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Pokemon')
export class Pokemon {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  skills: string;
}
