import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}

create(data: CreateHotelDto) {
  return this.prisma.hotel.create({
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      country: data.country,
    },
  });
}



  findAll() {
    return this.prisma.hotel.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotel.findUnique({
      where: { id },
    });
  }

update(id: number, data: UpdateHotelDto) {
  return this.prisma.hotel.update({
    where: { id },
    data: {
      ...data,
    },
  });
}


  remove(id: number) {
    return this.prisma.hotel.delete({
      where: { id },
    });
  }
}
