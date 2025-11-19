import { IsNotEmpty, IsString } from 'class-validator';
<<<<<<< HEAD


export class CreateHotelDto {
@IsString()
@IsNotEmpty()
name: string;


@IsString()
@IsNotEmpty()
address: string;


@IsString()
@IsNotEmpty()
city: string;


@IsString()
@IsNotEmpty()
country: string;
}
=======
import { ApiProperty } from '@nestjs/swagger';

export class CreateHotelDto {
  @ApiProperty({ example: 'Grand Hotel' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '123 Main Street' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'New York' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'USA' })
  @IsString()
  @IsNotEmpty()
  country: string;
}
>>>>>>> 49fbee8d892a743e886f4c3289e98fbc05eb3aab
