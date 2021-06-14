import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { healthCheck } from './healthCheck.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(healthCheck);
  await app.listen(3000);
}
bootstrap();
