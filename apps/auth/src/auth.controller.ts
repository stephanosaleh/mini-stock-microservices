import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    
    @MessagePattern({ cmd: 'auth_register' })
    register(@Payload() dto: RegisterDto) {
      return this.authService.register(dto);
    }

    @MessagePattern({ cmd: 'auth_login' })
    login(@Payload() dto: LoginDto) {
      return this.authService.login(dto);
    }
  
}
//This controller is not waiting for HTTP requests like @Get().
//It is waiting for microservice messages
