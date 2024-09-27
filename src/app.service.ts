import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TravelDto } from './dto/travels.dto';
import { faker } from '@faker-js/faker/locale/ru';
import { Card } from 'types';
import { randomUUID } from 'crypto';
import { countriesData, tagsArray } from './data';

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

    for (let i = 0; i < 100; i++) {
      const sex: 'male' | 'female' = faker.helpers.arrayElement(['male', 'female']);

      const tempCard = {
        uuid: randomUUID(),
        firstName: faker.person.firstName(sex),
        lastName: faker.person.lastName(sex),
        photoUrl: `https://xsgames.co/randomusers/avatar.php?g=${sex}`,
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

  async getTravels() {
    const tempArr: Card[] = [];

    for (let i = 0; i < 300; i++) {
      const sex: 'male' | 'female' = faker.helpers.arrayElement(['male', 'female']);

      const tempCard = {
        uuid: randomUUID(),
        firstName: faker.person.firstName(sex),
        lastName: faker.person.lastName(sex),
        photoUrl: `https://xsgames.co/randomusers/avatar.php?g=${sex}`,
        tags: faker.helpers.arrayElements(tagsArray, { min: 3, max: 8 }),
        countries: faker.helpers.arrayElements(countriesData, { min: 1, max: 4 }),
        transport: faker.helpers.arrayElements(['plane', 'bus', 'bicycle', 'run'], {
          min: 1,
          max: 4,
        }),
        likes: faker.number.int({ min: 10, max: 10000 }),
        level: faker.number.int({ min: 3, max: 80 }),
      };

      tempArr.push(tempCard);
    }

    return tempArr;
  }
}
