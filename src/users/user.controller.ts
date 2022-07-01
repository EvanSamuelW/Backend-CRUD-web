import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        return {
            data: await this.userService.findAll()
        };
    }


    @Post()
    async create(@Body() data: { username: string; password: string; }) {
        const hashedPassword = await bcrypt.hash(data.password, 12);
        const user = await this.userService.create({ username: data.username, password: hashedPassword });

        return user;

    }

    
    @Post('login')
    async login(@Body('username')username:string, @Body('password')password:string) {
    
        const user = await this.userService.findOne({ where:{username} });

        if (!user) {
            throw new BadRequestException('Invalid username or password');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid username or password');

        }
        return user;
        
    }

    @Put(':id')
    async update(@Body() data: { username: string; password: string; }, @Param('id') id: number) {
        return {
            data: await this.userService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.userService.delete(id);
    }
}