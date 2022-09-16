import { SequelizeModule } from '@nestjs/sequelize';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { sequelizeConfig } from './config/sequelize.config';
import { LessonModule } from './lesson/lesson.module';
import { PokeTypeModule } from './poke-type/poke-type.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    LessonModule,
    PokeTypeModule,
    PokemonModule,
  ],
})
export class AppModule {}
