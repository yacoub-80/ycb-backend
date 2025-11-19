import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: {
        bookingId: String(dto.bookingId),
        amount: dto.amount,
        method: dto.method,
        status: dto.status,
      },
    });
  }

  findAll() {
    return this.prisma.payment.findMany();
  }

  findOne(id: number) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  update(id: number, dto: CreatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: {
        bookingId: String(dto.bookingId),
        amount: dto.amount,
        method: dto.method,
        status: dto.status,
      },
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
