import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from '@prisma/client';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  create(@Body() data: Hotel) {
    return this.hotelService.create(data);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(Number(id));
  }
}
