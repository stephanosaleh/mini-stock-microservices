import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StocksController {
  @MessagePattern({ cmd: 'stocks_hello' })
  stocksHello() {
    return {
      message: 'Hello stocks!',
    };
  }
}
