import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking, PaymentStatus, PaymentMethod } from '@prisma/client';

@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  create(
    @Body()
    data: {
      userId: number;
      roomId: number;
      hotelId: number;
      payment: { amount: number; status: PaymentStatus; method: PaymentMethod };
    },
  ) {
    return this.bookingService.create(data);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(Number(id));
  }
}
