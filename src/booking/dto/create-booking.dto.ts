import { IsOptional, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateBookingDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  hotelId?: number;

  @IsOptional()
  @IsNumber()
  roomId?: number;

  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @IsOptional()
  @IsString()
  status?: string; // OPTIONAL — لأن الخدمة تستخدمه إذا وجد
}
