import { Injectable } from '@nestjs/common';
import * as bycript from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../core/entities/user.entity';
import { UserUseCases } from '../user-use-cases/user-use-case';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userUseCases: UserUseCases
    ) {}

  async validateUser({ username, password }:Partial<UserEntity>) {
    const findUser = await this.userUseCases.getUserByParams({username: username})
    if (!findUser) return null;
    if (bycript.compare(password,findUser.password )) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
  
  async login(user: Partial<UserEntity>) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: UserEntity): Promise<UserEntity> {
    const hashedPassword = await bycript.hash(user.password, 10);
    user.password = hashedPassword;
    return this.userUseCases.createUser(user);
  }

  async logout(): Promise<any> {
    // Implement logic to handle logout if needed
    return { message: 'Logged out successfully' };
  }
}