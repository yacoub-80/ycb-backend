<<<<<<< HEAD
import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';


export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
=======
export class UpdateHotelDto {
  name?: string;
  address?: string;
  city?: string;
  country?: string;
}
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
