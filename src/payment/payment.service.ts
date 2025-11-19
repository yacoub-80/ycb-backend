import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
<<<<<<< HEAD
=======
import { UpdatePaymentDto } from './dto/update-payment.dto';
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePaymentDto) {
    return this.prisma.payment.create({
<<<<<<< HEAD
      data: {
        bookingId: String(dto.bookingId),
        amount: dto.amount,
        method: dto.method,
        status: dto.status,
      },
=======
      data: dto,
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
    });
  }

  findAll() {
<<<<<<< HEAD
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
=======
    return this.prisma.payment.findMany({
      include: {
        booking: true,
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
      },
    });
  }

<<<<<<< HEAD
  remove(id: number) {
    return this.prisma.payment.delete({ where: { id } });
=======
  findOne(id: number) {
    return this.prisma.payment.findUnique({
      where: { id },
      include: {
        booking: true,
      },
    });
  }

  update(id: number, dto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({
      where: { id },
    });
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
  }
}
