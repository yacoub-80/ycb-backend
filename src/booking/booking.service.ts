import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Booking, PaymentStatus, PaymentMethod } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    userId: number;
    roomId: number;
    hotelId: number;
    payment: { amount: number; status: PaymentStatus; method: PaymentMethod };
  }): Promise<Booking> {
    return this.prisma.booking.create({
      data: {
        user: { connect: { id: data.userId } },
        room: { connect: { id: data.roomId } },
        hotel: { connect: { id: data.hotelId } },
        payment: {
          create: {
            amount: data.payment.amount,
            status: data.payment.status,
            method: data.payment.method,
          },
        },
      },
      include: { payment: true },
    });
  }

  findAll(): Promise<Booking[]> {
    return this.prisma.booking.findMany({ include: { payment: true } });
  }

  findOne(id: number): Promise<Booking | null> {
    return this.prisma.booking.findUnique({
      where: { id },
      include: { payment: true },
    });
  }
}
