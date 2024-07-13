import { Injectable } from '@nestjs/common';
import { UserEntity } from '../core/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new UserEntity();
    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;

    return newUser;
  }

  updateUser(UpdateUserDto: UpdateUserDto) {
    const newUser = new UserEntity();
    newUser.username = UpdateUserDto.username;
    newUser.password = UpdateUserDto.password;

    return newUser;
  }
}
