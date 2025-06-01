import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ description: 'name', example: 'อาหารกลางวัน' })
  name: string;

  @ApiProperty({ description: 'type', example: 'expense' })
  type: 'income' | 'expense';

  @ApiProperty({ description: 'user ID', example: 1 })
  userId: number;
}
