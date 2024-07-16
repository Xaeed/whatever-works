import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  created_at: Date

  @Column({ nullable: true })
  created_by: string

  @Column({ nullable: true }) // For simple use case keeping these nullable
  updated_at: Date
  
  @Column({ nullable: true })
  updated_by: string
  
  /** To populate user entity with dtos we use constructor approach. */
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}