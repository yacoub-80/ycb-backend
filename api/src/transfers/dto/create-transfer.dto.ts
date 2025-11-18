import { IsInt, IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateTransferDto {
  @IsInt()
  userId: number;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsDateString()
  date: string;

  @IsNumber()
  price: number;
}
