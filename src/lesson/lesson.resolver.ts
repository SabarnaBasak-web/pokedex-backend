import { LessonService } from './lesson.service';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { User } from './User.model';
import { UserType } from './User.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  async lesson() {
    return {
      id: '1',
      name: 'Physics class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => UserType)
  async createUser() {
    return this.lessonService.createUser();
  }
}
