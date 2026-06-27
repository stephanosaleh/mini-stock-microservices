import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  @MessagePattern({ cmd: 'auth_hello' })
  hello() {
    return {
      message: 'Hello world!',
    };
  }
}
//This controller is not waiting for HTTP requests like @Get().
//It is waiting for microservice messages
