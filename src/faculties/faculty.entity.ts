import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from 'src/students/student.entity';
@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: 'timestamp' })
  created_at: Date;

  @OneToMany(() => Student, (student) => student.faculty)
  students: Student[]

}
