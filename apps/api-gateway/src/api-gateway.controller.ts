import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authClient: ClientProxy,

    @Inject('WALLET_SERVICE')
    private readonly walletClient: ClientProxy,

    @Inject('STOCKS_SERVICE')
    private readonly stocksClient: ClientProxy,
  ) {}

  @Get('auth/hello')
  authHello() {
    return this.authClient.send({ cmd: 'auth_hello' }, {}); //it sends a TCP message to the auth microservice
  }

  @Get('wallet/hello')
  walletHello() {
    return this.walletClient.send({ cmd: 'wallet_hello' }, {});
  }

  @Get('stocks/hello')
  stocksHello() {
    return this.stocksClient.send({ cmd: 'stocks_hello' }, {});
  }

  @Post('auth/register')
  register(@Body() body: any) {
    return this.authClient.send({ cmd: 'auth_register' }, body);
  }

  @Post('auth/login')
  login(@Body() body: any) {
    return this.authClient.send({ cmd: 'auth_login' }, body);
  }
}
