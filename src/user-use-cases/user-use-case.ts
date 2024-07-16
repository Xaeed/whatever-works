import { Injectable } from '@nestjs/common';
import { UserEntity } from '../core/entities/user.entity';
import { IDataServices } from '../core/service.abstract';
import { UserDto, UpdateUserDto } from '../core/dtos';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  getAllUsers(): Promise<UserEntity[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<UserEntity> {
    return this.dataServices.users.get(id);
  }

  getUserByParams(params: any): Promise<UserEntity> {
    return this.dataServices.users.getByParams(params);
  }

  createUser(UserDto: UserDto): Promise<UserEntity> {
    const newUser = new UserEntity({
      ...UserDto,
      created_at: new Date(),
    });
    return this.dataServices.users.create(newUser);
  }

  updateUser(
    userId: string,
    UpdateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = this.userFactoryService.updateUser(UpdateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
