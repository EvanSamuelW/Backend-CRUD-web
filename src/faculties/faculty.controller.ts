import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { FacultyService } from "./faculty.service";

@Controller('faculties')
export class FacultyController {
    
    constructor(private readonly facultyService: FacultyService) {}

    @Get()
    async findAll() {
        return {
            data: await this.facultyService.findAll()
        };
    }


    @Post()
    async create(@Body() data:  { name: string; code: string; }) {
        return {
            data: await this.facultyService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data:  { name: string; code: string; }, @Param('id') id: number) {
        return {
            data: await this.facultyService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.facultyService.delete(id);
    }
}