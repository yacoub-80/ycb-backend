import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Room, Prisma } from '@prisma/client';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RoomCreateInput): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  findAll(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }

  findOne(id: number): Promise<Room | null> {
    return this.prisma.room.findUnique({ where: { id } });
  }
}
