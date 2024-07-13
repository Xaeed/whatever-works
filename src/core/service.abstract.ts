  
import { UserEntity } from './entities/user.entity';

/** Defining abstraction which needs to be implemented by repositries
 *  and Dataservices using those repositories */

export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
  
    abstract get(id: string): Promise<T>;
  
    abstract create(item: T): Promise<T>;
  
    abstract update(id: string, item: T);
  }

export abstract class IDataServices {
  abstract users: IGenericRepository<UserEntity>;
}
