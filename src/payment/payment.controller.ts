import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Prisma } from '@prisma/client';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() data: Prisma.PaymentCreateInput) {
    return this.paymentService.create(data);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.PaymentUpdateInput) {
    return this.paymentService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
