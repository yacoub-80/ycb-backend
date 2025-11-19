import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
<<<<<<< HEAD

@Module({
  controllers: [BookingController],
  providers: [BookingService],
=======
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BookingController],
  providers: [BookingService, PrismaService],
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
})
export class BookingModule {}
