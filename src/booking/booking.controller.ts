<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Bookings')
@Controller('bookings')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ status: 201, description: 'Booking successfully created' })
  create(@Body() dto: CreateBookingDto) {
    return this.bookingService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({ status: 200, description: 'List of bookings' })
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking by ID' })
  @ApiResponse({ status: 200, description: 'Booking found' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update booking' })
  @ApiResponse({ status: 200, description: 'Booking successfully updated' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  update(@Param('id') id: string, @Body() updateDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete booking' })
  @ApiResponse({ status: 200, description: 'Booking successfully deleted' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
}
