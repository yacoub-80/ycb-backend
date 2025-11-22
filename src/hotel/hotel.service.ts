import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Hotel, Prisma } from '@prisma/client';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.HotelCreateInput): Promise<Hotel> {
    return this.prisma.hotel.create({ data });
  }

  findAll(): Promise<Hotel[]> {
    return this.prisma.hotel.findMany();
  }

  findOne(id: number): Promise<Hotel | null> {
    return this.prisma.hotel.findUnique({ where: { id } });
  }
}
