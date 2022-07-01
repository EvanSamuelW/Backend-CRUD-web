import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';
import { Faculty } from './faculties/faculty.entity';
import { FacultyController } from './faculties/faculty.controller';
import { FacultyService } from './faculties/faculty.service';
import { Student } from './students/student.entity';
import { StudentController } from './students/student.controller';
import { StudentService } from './students/student.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'adminpanel',
      password: '',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,Faculty,Student])
  ],
  controllers: [UserController,FacultyController,StudentController],
  providers: [UserService,FacultyService,StudentService],
})
export class AppModule {}
