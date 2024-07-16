import { Repository, DeepPartial, FindOptionsRelations, FindOptionsWhere, DeleteResult } from 'typeorm';
import { IGenericRepository } from '../core/service.abstract';
import { NotFoundException } from '@nestjs/common';


export class GenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;
  private _relations: FindOptionsRelations<T>;

  constructor(repository: Repository<T>, relations: FindOptionsRelations<T> = {}) {
    this._repository = repository;
    this._relations = relations;
  }

  getAll(): Promise<T[]> {
    return this._repository.find({ relations: this._relations });
  }

  get(id : any ): Promise<T> {
    const whereCondition: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>; // to fix type issue for id.
    return this._repository.findOne({ where: whereCondition , relations: this._relations });
  }

  create(item: DeepPartial<T>): Promise<T> {
    const entity = this._repository.create(item);
    return this._repository.save(entity);
  }

  async update(id: any, item: DeepPartial<T>): Promise<T> {
    const data:any= item;
    const result = await this._repository.update(id, data);
    if (result.affected === 0) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    const whereCondition: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>;
    return this._repository.findOne({ where: whereCondition });
  }
  
  getByParams(params:any):Promise<T>{
    const whereCondition = params as FindOptionsWhere<T>;
    return this._repository.findOne({ where: whereCondition , relations: this._relations });
  }

  async delete(userId: number): Promise<DeleteResult> {
    return this._repository.delete(userId);
  }
}
