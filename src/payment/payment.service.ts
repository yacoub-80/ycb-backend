import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Payment } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PaymentCreateInput): Promise<Payment> {
    return this.prisma.payment.create({
      data,
      include: { booking: true },
    });
  }

  async findAll(): Promise<Payment[]> {
    return this.prisma.payment.findMany({
      include: { booking: true },
    });
  }

  async findOne(id: number): Promise<Payment | null> {
    return this.prisma.payment.findUnique({
      where: { id },
      include: { booking: true },
    });
  }

  async update(id: number, data: Prisma.PaymentUpdateInput): Promise<Payment> {
    return this.prisma.payment.update({
      where: { id },
      data,
      include: { booking: true },
    });
  }

  async remove(id: number): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id },
      include: { booking: true },
    });
  }
}
