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
  created_at: string

  @Column()
  created_by: string

  @Column()
  updated_at: string
  
  @Column()
  updated_by: string
}