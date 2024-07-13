import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { userUseCasesModule } from './user-use-cases/user-use-case.module';

@Module({
  imports: [userUseCasesModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
