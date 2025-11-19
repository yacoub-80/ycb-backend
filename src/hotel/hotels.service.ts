import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HotelsService {
  constructor(private prisma: PrismaService) {}

  getAllHotels() {
    return this.prisma.hotel.findMany();
  }

  getHotelById(id: number) {
    return this.prisma.hotel.findUnique({ where: { id } });
  }

  createHotel(dto: any) {
    return this.prisma.hotel.create({ data: dto });
  }
}
