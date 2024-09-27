import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CardRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор карточки',
    example: 'f344f80c-6419-47ad-97ff-a0a49096eed5',
  })
  @Expose()
  public uuid: string;

  @ApiProperty({
    description: 'Имя путешественника',
    example: 'Алексей',
  })
  @Expose()
  public firstName!: string;

  @ApiProperty({
    description: 'Фамилия путешественника',
    example: 'Непомня',
  })
  @Expose()
  public lastName!: string;

  @ApiProperty({
    description: 'Фото путешественника',
    example: 'avatar.jpg',
  })
  @Expose()
  public photoUrl?: string;

  @ApiProperty({
    description: 'Тэги путешествия',
    example: '#goTravels, #football',
  })
  @Expose()
  public tags!: string[];

  @ApiProperty({
    description: 'Страны путешествия',
    example: 'Россия, Чехия',
  })
  @Expose()
  public countries!: string[];

  @ApiProperty({
    description: 'Траспорт путешествия',
    example: 'plane, auto',
  })
  @Expose()
  public transport!: string[];

  @ApiProperty({
    description: 'Количество лайков',
    example: 43,
  })
  @Expose()
  public likes!: number;

  @ApiProperty({
    description: 'Уровень путешественника',
    example: 88,
  })
  @Expose()
  public level!: number;
}
