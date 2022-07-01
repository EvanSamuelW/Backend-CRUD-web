import { Faculty } from 'src/faculties/faculty.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  studentNumber: string;

  @Column()
  facultyId: number;

  @ManyToOne(() => Faculty, (faculty) => faculty.students)
  faculty: Faculty}
