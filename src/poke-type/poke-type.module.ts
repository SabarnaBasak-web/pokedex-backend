import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PokeTypeModel } from './pokeType.model';
import { PokeTypeService } from './poke-type.service';
import { PokeTypeResolver } from './poke-type.resolver';

@Module({
  imports: [SequelizeModule.forFeature([PokeTypeModel])],
  providers: [PokeTypeService, PokeTypeResolver],
})
export class PokeTypeModule {}
