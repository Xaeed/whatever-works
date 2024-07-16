import { Injectable } from '@nestjs/common';
import { UserEntity } from '../core/entities/user.entity';
import { IDataServices } from '../core/service.abstract';
import { UserDto, UpdateUserDto } from '../core/dtos';
import { UserFactoryService } from './user-factory.service';
import { DeleteResult } from 'typeorm';

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

  async updateUser(
    userId: number,
    UpdateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userFactoryService.updateUser(UpdateUserDto);
    return this.dataServices.users.update(userId, user);
  }

  deleteUser(
    userId: number,
  ): Promise<DeleteResult> {
    return this.dataServices.users.delete(userId)
  }
}
