<<<<<<< HEAD
import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
=======
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
<<<<<<< HEAD
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  // ===============================
  // REGISTER
  // ===============================
  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);
=======
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
<<<<<<< HEAD
        password: hash,
        name: dto.name,
      },
    });

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  // ===============================
  // LOGIN
  // ===============================
=======
        password: hashedPassword,
        name: dto.name,
        role: dto.role || 'USER',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      user,
      ...tokens,
    };
  }

>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

<<<<<<< HEAD
    if (!user) throw new ForbiddenException('Email not found');

    const pwMatches = await bcrypt.compare(dto.password, user.password);
    if (!pwMatches) throw new ForbiddenException('Wrong password');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  // ===============================
  // LOGOUT
  // ===============================
  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: { id: userId },
      data: { hashedRt: null },
    });

    return { message: 'Logged out' };
  }

  // ===============================
  // REFRESH TOKENS
  // ===============================
  async refreshTokens(userId: number, rt: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access denied');

    const rtMatches = await bcrypt.compare(rt, user.hashedRt);
    if (!rtMatches) throw new ForbiddenException('Invalid refresh token');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  // ===============================
  // JWT TOKENS GENERATOR
  // ===============================
  async getTokens(userId: number, email: string) {
    const payload = { sub: userId, email };

    const [at, rt] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: this.config.get('AT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwt.signAsync(payload, {
        secret: this.config.get('RT_SECRET'),
        expiresIn: '7d',
=======
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const tokens = await this.generateTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      ...tokens,
    };
  }

  async refreshToken(dto: RefreshTokenDto) {
    try {
      const payload = this.jwtService.verify(dto.refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET') || 'your-refresh-secret-key',
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || user.refreshToken !== dto.refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const tokens = await this.generateTokens(user.id, user.email);

      await this.updateRefreshToken(user.id, tokens.refreshToken);

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    return { message: 'Logged out successfully' };
  }

  private async generateTokens(userId: number, email: string) {
    const payload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET') || 'your-secret-key',
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN') || '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET') || 'your-refresh-secret-key',
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') || '7d',
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
      }),
    ]);

    return {
<<<<<<< HEAD
      access_token: at,
      refresh_token: rt,
    };
  }

  // ===============================
  // REFRESH TOKEN HASH
  // ===============================
  async updateRtHash(userId: number, rt: string) {
    const hash = await bcrypt.hash(rt, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRt: hash },
    });
  }
}
=======
      accessToken,
      refreshToken,
    };
  }

  private async updateRefreshToken(userId: number, refreshToken: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }

  async validateUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
