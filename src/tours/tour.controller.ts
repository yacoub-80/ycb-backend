import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';


@Controller('tours')
export class TourController {
constructor(private readonly tourService: TourService) {}


@Post()
create(@Body() data: CreateTourDto) {
return this.tourService.create(data);
}


@Get()
findAll() {
return this.tourService.findAll();
}


@Get(':id')
findOne(@Param('id') id: string) {
return this.tourService.findOne(+id);
}


@Patch(':id')
update(@Param('id') id: string, @Body() data: UpdateTourDto) {
return this.tourService.update(+id, data);
}


@Delete(':id')
remove(@Param('id') id: string) {
return this.tourService.remove(+id);
}
}