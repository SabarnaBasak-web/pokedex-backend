import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './User.model';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
