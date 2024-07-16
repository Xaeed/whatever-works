import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { userUseCasesModule } from './user-use-cases/user-use-case.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [userUseCasesModule,AuthModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
