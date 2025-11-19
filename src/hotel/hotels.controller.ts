import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}

  @Get()
  getAll() {
    return this.hotelsService.getAllHotels();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.hotelsService.getHotelById(Number(id));
  }

  @Post()
  create(@Body() dto: any) {
    return this.hotelsService.createHotel(dto);
  }
}
