import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) {}

  // Create
  create(data: CreateTransferDto) {
    return this.prisma.transfer.create({
      data,
      include: { user: true },
    });
  }

  // Get all
  findAll() {
    return this.prisma.transfer.findMany({
      include: { user: true },
    });
  }

  // Get by ID
  async findOne(id: number) {
    const transfer = await this.prisma.transfer.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }

    return transfer;
  }

  // Update
  async update(id: number, data: UpdateTransferDto) {
    // Check exists
    await this.findOne(id);

    return this.prisma.transfer.update({
      where: { id },
      data,
      include: { user: true },
    });
  }

  // Delete
  async remove(id: number) {
    // Check exists
    await this.findOne(id);

    return this.prisma.transfer.delete({
      where: { id },
    });
  }
}
