import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AtGuard } from './guards/at.guard';
import { RtGuard } from './guards/rt.guard';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  logout(@Req() req) {
    return this.auth.logout(req.user.sub);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  refresh(@Req() req) {
    return this.auth.refreshTokens(req.user.sub, req.user.refreshToken);
  }
}
