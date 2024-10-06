import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TravelDto } from './dto/travels.dto';
import { faker } from '@faker-js/faker/locale/ru';
import { Card } from 'src/types';
import { randomUUID } from 'crypto';
import { countriesData, tagsArray } from './data';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createTravel(dto: TravelDto) {
    const {
      uuid,
      firstName,
      lastName,
      photoUrl,
      //companionsAmount,
      //travelDuration,
      //isChildrenAllowed,
      transportType,
      selectedCountries,
      tags,
      //travelDates,
      //entertainments,
    } = dto;

    const tempArr: Card[] = [];

    const currentCard = {
      uuid,
      firstName,
      lastName,
      photoUrl,
      tags,
      countries: selectedCountries,
      transport: transportType,
      likes: 0,
      level: faker.number.int({ min: 3, max: 80 }),
    };

    tempArr.push(currentCard);

    for (let i = 0; i < 19; i++) {
      const sex: 'male' | 'female' = faker.helpers.arrayElement([
        'male',
        'female',
      ]);

      const male = `https://xsgames.co/randomusers/assets/avatars/male/${faker.number.int({ min: 1, max: 70 })}.jpg`;
      const female = `https://xsgames.co/randomusers/assets/avatars/female/${faker.number.int({ min: 1, max: 70 })}.jpg`;

      const tempCard = {
        uuid: randomUUID(),
        firstName: faker.person.firstName(sex),
        lastName: faker.person.lastName(sex),
        photoUrl: `${sex === 'male' ? male : female}`,
        tags: faker.helpers.arrayElements(tagsArray, { min: 3, max: 8 }),
        countries: selectedCountries,
        transport: transportType,
        likes: faker.number.int({ min: 10, max: 10000 }),
        level: faker.number.int({ min: 3, max: 80 }),
      };

      tempArr.push(tempCard);
    }

    return tempArr;
  }

  async getTravels(paginationDTO: PaginationDTO) {
    const tempArr: Card[] = [];
    console.log(paginationDTO);

    for (let i = 0; i < 20; i++) {
      const sex: 'male' | 'female' = faker.helpers.arrayElement([
        'male',
        'female',
      ]);

      const male = `https://xsgames.co/randomusers/assets/avatars/male/${faker.number.int({ min: 1, max: 70 })}.jpg`;
      const female = `https://xsgames.co/randomusers/assets/avatars/female/${faker.number.int({ min: 1, max: 70 })}.jpg`;

      const tempCard = {
        uuid: randomUUID(),
        firstName: faker.person.firstName(sex),
        lastName: faker.person.lastName(sex),
        photoUrl: `${sex === 'male' ? male : female}`,
        tags: faker.helpers.arrayElements(tagsArray, { min: 3, max: 8 }),
        countries: faker.helpers.arrayElements(countriesData, {
          min: 1,
          max: 4,
        }),
        transport: faker.helpers.arrayElements(
          ['plane', 'bus', 'bicycle', 'run'],
          {
            min: 1,
            max: 4,
          },
        ),
        likes: faker.number.int({ min: 10, max: 10000 }),
        level: faker.number.int({ min: 3, max: 80 }),
      };

      tempArr.push(tempCard);
    }

    return tempArr;
  }
}
