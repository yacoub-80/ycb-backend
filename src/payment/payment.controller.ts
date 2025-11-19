<<<<<<< HEAD
import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private service: PaymentService) {}
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly service: PaymentService) {}
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab

  @Post()
  create(@Body() dto: CreatePaymentDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
<<<<<<< HEAD
  update(@Param('id') id: string, @Body() dto: CreatePaymentDto) {
=======
  update(@Param('id') id: string, @Body() dto: UpdatePaymentDto) {
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
