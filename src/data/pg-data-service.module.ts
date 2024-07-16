import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IDataServices } from '../core/service.abstract';
import { DATA_BASE_CONFIGURATION } from '../configs/index';
import { UserEntity } from '../core/entities/user.entity';
import { DataServices } from './pg-data.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule.forRoot({
        isGlobal: true, // Make the ConfigModule global
        envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DATA_BASE_CONFIGURATION.pgConnectionString,
      entities: [UserEntity],
      synchronize: true, // Set to false in production
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: DataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeORMDataServicesModule {}
