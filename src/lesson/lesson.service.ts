import { User } from './User.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LessonService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(): Promise<User> {
    return this.userModel.create({
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
    });
  }
}
