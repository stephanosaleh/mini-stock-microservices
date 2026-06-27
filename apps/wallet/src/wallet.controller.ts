import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WalletController {
  @MessagePattern({ cmd: 'wallet_hello' })
  hello() {
    return {
      message: 'Hello Wallet!',
    };
  }
}
