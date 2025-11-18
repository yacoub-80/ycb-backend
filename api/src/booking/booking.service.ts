import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  // Create booking
  async create(data: CreateBookingDto) {
    return this.prisma.booking.create({
      data,
      include: {
        user: true,
        hotel: true,
        room: true,
        payment: true,
      },
    });
  }

  // Get all bookings
  async findAll() {
    return this.prisma.booking.findMany({
      include: {
        user: true,
        hotel: true,
        room: true,
        payment: true,
      },
    });
  }

  // Get booking by id
  async findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        hotel: true,
        room: true,
        payment: true,
      },
    });
  }

  // Update booking
  async update(id: number, data: UpdateBookingDto) {
    return this.prisma.booking.update({
      where: { id },
      data,
      include: {
        user: true,
        hotel: true,
        room: true,
        payment: true,
      },
    });
  }

  // Delete booking
  async remove(id: number) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}
