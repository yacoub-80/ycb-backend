import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class TourService {
  constructor(private prisma: PrismaService) {}

  // ================================
  // CREATE
  // ================================
  async create(data: CreateTourDto) {
    return this.prisma.tour.create({
      data,
      include: {
        bookings: true,   // إذا لديك relation للـ bookings
      },
    });
  }

  // ================================
  // FIND ALL
  // ================================
  async findAll() {
    return this.prisma.tour.findMany({
      orderBy: { id: 'desc' },
      include: {
        bookings: true,
      },
    });
  }

  // ================================
  // FIND ONE
  // ================================
  async findOne(id: number) {
    const tour = await this.prisma.tour.findUnique({
      where: { id },
      include: {
        bookings: true,
      },
    });

    if (!tour) {
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }

    return tour;
  }

  // ================================
  // UPDATE
  // ================================
  async update(id: number, data: UpdateTourDto) {
    await this.findOne(id); // للتحقق من وجود العنصر

    return this.prisma.tour.update({
      where: { id },
      data,
      include: {
        bookings: true,
      },
    });
  }

  // ================================
  // DELETE
  // ================================
  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.tour.delete({
      where: { id },
    });
  }
}
