import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  findAll() {
    return 'All bookings';
  }
}
