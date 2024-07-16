import { Controller, Get, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { UserDto, UpdateUserDto } from '../core/dtos/user.dto';
import { UserUseCases } from '../user-use-cases/user-use-case';
import { JwtAuthGuard } from 'src/core/guards/jwt.guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createUser(@Body() userDto: UserDto) {
    return this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateUser(
    @Param('id') userId: string,
    @Body() updateuserDto: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(userId, updateuserDto);
  }
}
