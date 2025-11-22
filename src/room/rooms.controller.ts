import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from '@prisma/client';

@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  create(@Body() data: Room) {
    return this.roomService.create(data);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(Number(id));
  }
}
