import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Faculty } from "./faculty.entity";
import { Repository } from "typeorm";


@Injectable()
export class FacultyService {
   
    constructor(@InjectRepository(Faculty) private readonly facultyRepository: Repository<Faculty>) {}

    findAll() {
        return this.facultyRepository.find();
    }


    create(data: { name: string; code: string; }) {
        const faculty = new Faculty();
        faculty.name = data.name;
        faculty.code = data.code;

        return this.facultyRepository.save(faculty);
    }

    update(data: { name: string; code: string; }, id: number) {
        return this.facultyRepository.save({...data, id: Number(id)})
    }

    delete(id: number) {
        return this.facultyRepository.delete(id)
    }
}
    