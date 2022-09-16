import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Pokemon } from './Pokemon.model';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { PokeTypeModel } from 'src/poke-type/pokeType.model';

@Module({
  imports: [SequelizeModule.forFeature([Pokemon])],
  providers: [PokemonService, PokemonResolver],
})
export class PokemonModule {}
