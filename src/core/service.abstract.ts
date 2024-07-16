  
import { DeepPartial, DeleteResult } from 'typeorm';
import { UserEntity } from './entities/user.entity';

/** Defining abstraction which needs to be implemented by repositries
 *  and Dataservices using those repositories */

export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
  
    abstract get(id: string): Promise<T>;
  
    abstract create(item: T): Promise<T>;
  
    abstract update(id: number, item: any):  Promise<T>;

    abstract getByParams(params:any): Promise<T>;
    
    abstract delete(userId: number,):Promise<DeleteResult>
  }

export abstract class IDataServices {
  abstract users: IGenericRepository<UserEntity>;
}
