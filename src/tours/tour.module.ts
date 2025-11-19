import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';


@Module({
imports: [PrismaModule],
controllers: [TourController],
providers: [TourService],
})
export class TourModule {}