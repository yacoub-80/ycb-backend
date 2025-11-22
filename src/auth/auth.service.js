"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwt) {
        this.usersService = usersService;
        this.jwt = jwt;
    }
    async register(dto) {
        const exists = await this.usersService.findByEmail(dto.email);
        if (exists)
            throw new common_1.UnauthorizedException('Email already used');
        const user = await this.usersService.createUser(dto);
        const tokens = await this.getTokens(user.id, user.email);
        await this.usersService.updateRefreshToken(user.id, tokens.refresh_token);
        return { user, ...tokens };
    }
    async login(dto) {
        const user = await this.usersService.findByEmail(dto.email);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const match = await bcrypt.compare(dto.password, user.password);
        if (!match)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const tokens = await this.getTokens(user.id, user.email);
        await this.usersService.updateRefreshToken(user.id, tokens.refresh_token);
        return { user, ...tokens };
    }
    async logout(userId) {
        await this.usersService.clearRefreshToken(userId);
        return { message: 'Logged out' };
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken)
            throw new common_1.UnauthorizedException('Access denied');
        const valid = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!valid)
            throw new common_1.UnauthorizedException('Access denied');
        const tokens = await this.getTokens(user.id, user.email);
        await this.usersService.updateRefreshToken(user.id, tokens.refresh_token);
        return tokens;
    }
    async getTokens(userId, email) {
        const payload = { sub: userId, email };
        const access_token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
        });
        const refresh_token = await this.jwt.signAsync(payload, {
            expiresIn: '7d',
        });
        return { access_token, refresh_token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
