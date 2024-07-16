import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../core/stratgies/local.strategy';
import { JwtStrategy } from '../core/stratgies/jwt.strategy';
import { userUseCasesModule } from 'src/user-use-cases/user-use-case.module';
import {JWT_SECRET} from '../configs/index'

@Module({
  imports: [
    PassportModule,
    userUseCasesModule,
    JwtModule.register({
      secret: JWT_SECRET.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}