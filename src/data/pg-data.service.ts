import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../core/service.abstract';
import { GenericRepository } from './pg-generic.repository';
import { UserEntity } from '../core/entities/user.entity';

@Injectable()
export class DataServices implements IDataServices, OnApplicationBootstrap {
  users: GenericRepository<UserEntity>;

  constructor(
    @InjectRepository(UserEntity)
    private UserrRepository: Repository<UserEntity>,
  ) {}

  onApplicationBootstrap() {
    this.users = new GenericRepository<UserEntity>(this.UserrRepository);
  }
}
