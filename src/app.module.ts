import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TransferModule } from './transfers/transfer.module';
import { HotelModule } from './hotel/hotel.module';
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
    HotelModule,
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
