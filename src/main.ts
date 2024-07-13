import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DATA_BASE_CONFIGURATION } from './configs/index';

async function bootstrap() {
  console.log('commm', process.env.PG_CONNECTION_STRING)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
