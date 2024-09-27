import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsIn, IsNumber, IsString, Min } from 'class-validator';
import { TransportType } from 'src/types';

class TravelDates {
  @ApiProperty({
    description: 'Дата начала путешествия',
    example: 'Fri Sep 27 2024 00:00:00 GMT+0300',
    required: true,
  })
  @IsString()
  public startDate: string;

  @ApiProperty({
    description: 'Дата окончания путешествия',
    example: 'Fri Sep 29 2024 00:00:00 GMT+0300',
    required: true,
  })
  @IsString()
  public endDate: string;
}

export class TravelDto {
  @ApiProperty({
    description: 'Идентификатор путешествия',
    example: 'eddae5a0-ab49-44bc-81c0-7472c39fb28e',
    required: true,
  })
  @IsString()
  public uuid!: string;

  @ApiProperty({
    description: 'Имя путешественника',
    example: 'Иван',
    required: true,
  })
  @IsString()
  public firstName: string;

  @ApiProperty({
    description: 'Фамилия путешественника',
    example: 'Иванов',
    required: true,
  })
  @IsString()
  public lastName: string;

  @ApiProperty({
    description: 'Url avatara',
    example: 'https://example.com/avatar.png',
    required: true,
  })
  @IsString()
  public photoUrl: string;

  @ApiProperty({
    description: 'Количество путешественников',
    example: 3,
    required: true,
  })
  @IsNumber()
  @Min(1)
  public companionsAmount: number;

  @ApiProperty({
    description: 'Количество дней путешествия',
    example: 2,
    required: true,
  })
  @IsNumber()
  @Min(1)
  public travelDuration: number;

  @ApiProperty({
    description: 'Участвуют ли дети в путешествии',
    example: true,
    required: true,
  })
  @IsBoolean()
  public isChildrenAllowed: boolean;

  @ApiProperty({
    description: 'Тип транспорта',
    example: 'bus, plane',
    enum: TransportType,
    required: true,
  })
  @IsIn(['plane', 'bus', 'bicycle', 'run'], { each: true })
  public transportType: string[];

  @ApiProperty({
    description: 'Массив с данными выбранных стран',
    example: 'флаг, описание, название',
    required: true,
  })
  public selectedCountries: CountryData[];

  @ApiProperty({
    description: 'Тэги путешествия',
    example: '#football, #beer',
    required: true,
  })
  @IsArray()
  public tags: string[];

  @ApiProperty({
    description: 'Даты путешествия',
    example:
      '{startDate: "Fri Sep 27 2024 00:00:00 GMT+0300", endDate: Fri Sep 29 2024 00:00:00 GMT+0300}',
    required: true,
  })
  public travelDates: TravelDates;

  @ApiProperty({
    description: 'Планы развлечений в путешествии',
    example: 'Сходить на футбол, попить пива',
    required: true,
  })
  public entertainments: {
    country: string;
    description: string;
  };
}

class CountryData {
  @ApiProperty({
    description: 'Расположение файла флага',
    example: 'https://flagcdn.com/w320/au.png',
    required: true,
  })
  @IsString()
  public flags: string;

  @ApiProperty({
    description: 'Описание флага',
    example: 'Флаг Австралии имеет темно-синее поле.',
    required: true,
  })
  @IsString()
  public alt: string;

  @ApiProperty({
    description: 'Название страны',
    example: 'Австралия',
    required: true,
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'Регион страны',
    example: 'Европа',
    required: true,
  })
  @IsString()
  public region: string;
}
