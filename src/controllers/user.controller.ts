import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../core/dtos/user.dto';
import { UserUseCases } from '../user-use-cases/user-use-case';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') userId: string,
    @Body() updateuserDto: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(userId, updateuserDto);
  }
}
