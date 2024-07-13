import { Module } from '@nestjs/common';
import { TypeORMDataServicesModule } from '../data/pg-data-service.module';
@Module({
  imports: [TypeORMDataServicesModule],
  exports: [TypeORMDataServicesModule],
})
export class DataServicesModule {}
