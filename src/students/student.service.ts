import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { Repository } from "typeorm";


@Injectable()
export class StudentService {
   
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {}

    findAll() {
        return this.studentRepository.createQueryBuilder("student")
            .leftJoinAndSelect("student.faculty", "faculty")
            .getMany();
    }


    create(data: { name: string; studentNumber: string; facultyId: number }) {
        const student = new Student();
        student.name = data.name;
        student.studentNumber = data.studentNumber;
        student.facultyId = data.facultyId;

        return this.studentRepository.save(student);
    }

    update(data: { name: string; studentNumber: string; facultyId: number }, id: number) {
        return this.studentRepository.save({...data, id: Number(id)})
    }

    delete(id: number) {
        return this.studentRepository.delete(id)
    }
}
    