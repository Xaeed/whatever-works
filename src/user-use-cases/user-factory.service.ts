import { Injectable } from '@nestjs/common';
import { UserEntity } from '../core/entities/user.entity';
import { UserDto, UpdateUserDto } from '../core/dtos';

/** We use factory pattern to populate user dtos so that we can have unifirm input for our db. */
@Injectable()
export class UserFactoryService {
  createNewUser(UserDto: UserDto) {
   return new UserEntity({ ...UserDto, created_at:  new Date() });
  }

  updateUser(UpdateUserDto: UpdateUserDto) {
    return new UserEntity({ ...UpdateUserDto, updated_at:  new Date()});
  }
}
