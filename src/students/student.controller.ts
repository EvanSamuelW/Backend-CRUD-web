import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('students')
export class StudentController {
    
    constructor(private readonly studentService: StudentService) {}

    @Get()
    async findAll() {
        return {
            data: await this.studentService.findAll()
        };
    }


    @Post()
    async create(@Body() data:  { name: string; studentNumber: string; facultyId: number  }) {
        return {
            data: await this.studentService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data:  { name: string; studentNumber: string; facultyId: number  }, @Param('id') id: number) {
        return {
            data: await this.studentService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.studentService.delete(id);
    }
}