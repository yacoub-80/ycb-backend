import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TransferModule } from './transfers/transfer.module';
<<<<<<< HEAD
import { HotelsModule } from './hotel/hotels.module';
=======
import { HotelModule } from './hotel/hotel.module';
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
import { RoomsModule } from './room/rooms.module';
import { TourModule } from './tours/tour.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PublicGuard } from './auth/guards/public.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    AuthModule,
    UsersModule,
    BookingModule,
    TourModule,
    RoomsModule,
<<<<<<< HEAD
    HotelsModule,
=======
    HotelModule,
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
    TransferModule,
    PaymentModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PublicGuard,
    },
  ],
})
export class AppModule {}
