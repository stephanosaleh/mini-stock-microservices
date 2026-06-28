import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest<Request>();

        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing or invalid token');
        }

        console.log('JWT_SECRET IN AUTH:', process.env.JWT_SECRET);

        const token = authHeader.split(' ')[1];

        try {
const payload = await this.jwtService.verifyAsync(token, {
  secret: 'debug_secret',
});

            request['user'] = {
                userId: payload.sub,
                email: payload.email,
            };
            return true;
        } catch (error) {
            console.log('JWT VERIFY ERROR:', error.message);
            console.log('TOKEN USED:', token);
            console.log('JWT_SECRET IN GATEWAY:', process.env.JWT_SECRET);

            throw new UnauthorizedException('Invalid or expired token!');
}
    }
}