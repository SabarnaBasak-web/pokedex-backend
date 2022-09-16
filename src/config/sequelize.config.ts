import { SequelizeModule } from '@nestjs/sequelize';

export const sequelizeConfig: SequelizeModule = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'taskManagement',
  autoLoadModels: true,
};
