import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';

import { HotelModule } from './hotels/hotel.module';
import { RoomModule } from './rooms/room.module';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    HotelModule,
    RoomModule,
    BookingModule,
    AuthModule,
  ],
})
export class AppModule {}
