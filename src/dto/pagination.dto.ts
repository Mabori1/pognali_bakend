import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { RegionType } from 'src/types';

export class PaginationDTO {
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsPositive()
  @IsOptional()
  page?: number;

  @IsNumber()
  @Transform(({ value }) => +value)
  @IsPositive()
  @IsOptional()
  public limit?: number;

  @IsEnum(RegionType, {
    each: true,
  })
  @Transform(({ value }) => value.split(',').map((item: string) => item))
  @IsOptional()
  public regions?: RegionType[];
}
