import { NestFactory } from '@nestjs/core';
import { StocksModule } from './stocks.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    StocksModule,
    {
      transport: Transport.TCP,
      options:
      {
        host: '127.0.0.1',
        port: 3003,
      }
    }
  
  );
  await app.listen();
}
bootstrap();
