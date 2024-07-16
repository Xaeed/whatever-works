import { Body, Controller, Request, Get, Post, Req, UseGuards } from '@nestjs/common';
// import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../core/guards/local.guards';
import { JwtAuthGuard } from '../core/guards/jwt.guards';
import { UserEntity } from '../core/entities/user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() user: UserEntity) {
    return this.authService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout() {
    return this.authService.logout();
  }
}