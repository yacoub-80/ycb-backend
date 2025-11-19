export class UpdateTourDto {
  title?: string;
  description?: string;
  price?: number;
  startDate?: string;
  endDate?: string;

  // الحقول الجديدة
  duration?: string;
  location?: string;
}
