import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
   
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    findAll() {
        return this.userRepository.find();
    }


    create(data:any) { 
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne(condition);
    }

    update(data: { username: string; password: string; }, id: number) {
        return this.userRepository.save({...data, id: Number(id)})
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }
}
    