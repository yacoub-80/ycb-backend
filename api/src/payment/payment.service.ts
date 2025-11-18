import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.payment.findMany({
      include: {
        booking: true,
      },
    });
  }

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
  }
}
