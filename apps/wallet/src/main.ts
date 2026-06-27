import { NestFactory } from '@nestjs/core';
import { WalletModule } from './wallet.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice( //Start the Auth microservice and make it listen for TCP messages on port 3001
    WalletModule, 
    {
      transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3002,
    },
  },
  );
  await app.listen();//Auth is not exposing HTTP routes. It is listening for TCP messages.
}
bootstrap();
