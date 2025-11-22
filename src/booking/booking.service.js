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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookingService = class BookingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.booking.create({
            data: dto,
            include: {
                payment: true,
                room: true,
                hotel: true,
                user: true
            }
        });
    }
    findAll() {
        return this.prisma.booking.findMany({
            include: {
                payment: true,
                room: true,
                hotel: true,
                user: true
            }
        });
    }
    findOne(id) {
        return this.prisma.booking.findUnique({
            where: { id },
            include: {
                payment: true,
                room: true,
                hotel: true,
                user: true
            }
        });
    }
    update(id, dto) {
        return this.prisma.booking.update({
            where: { id },
            data: dto,
            include: {
                payment: true
            }
        });
    }
    remove(id) {
        return this.prisma.booking.delete({
            where: { id }
        });
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
