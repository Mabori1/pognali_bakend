// import { PrismaClient, Prisma } from '@prisma/client';
// import { fakerRU as faker } from '@faker-js/faker';
// import { countriesData, tagsArray } from 'src/data';
//
// const prisma = new PrismaClient();
//
// const DATA_COUNT = 900;
// const dataMock = [];
//
// for (let i = 0; i < DATA_COUNT; i++) {
//
//       const sex: 'male' | 'female' = faker.helpers.arrayElement([
//         'male',
//         'female',
//       ]);
//
//       const tempCard = {
//         firstName: faker.person.firstName(sex),
//         lastName: faker.person.lastName(sex),
//         photoUrl: `https://xsgames.co/randomusers/avatar.php?g=${sex}`,
//         tags: faker.helpers.arrayElements(tagsArray, { min: 3, max: 8 }),
//         countries: faker.helpers.arrayElements(countriesData, {
//           min: 1,
//           max: 4,
//         }),
//         transport: faker.helpers.arrayElements(
//           ['plane', 'bus', 'bicycle', 'run'],
//           {
//             min: 1,
//             max: 4,
//           },
//         ),
//         likes: faker.number.int({ min: 10, max: 10000 }),
//         level: faker.number.int({ min: 3, max: 80 }),
//       };
//
//
// model Tags {
//   uuid   String @id @default(uuid())
//   card   Card   @relation(fields: [cardId], references: [uuid])
//   cardId String
//   name   String
// }
//
// model Countries {
//   uuid   String @id @default(uuid())
//   card   Card   @relation(fields: [cardId], references: [uuid])
//   cardId String
//   name   String
// }
//
// model Transport {
//   uuid   String @id @default(uuid())
//   card   Card   @relation(fields: [cardId], references: [uuid])
//   cardId String
//   name   String
// }
//
//
//
//
//
//
//
//   // const typeApartment = faker.helpers.arrayElement([
//   //   'ONE_ROOM',
//   //   'TWO_ROOM',
//   //   'THREE_ROOM',
//   //   'FOUR_ROOM',
//   //   'STUDIYA',
//   // ]);
//   // const typeHouse = faker.helpers.arrayElement(['RESIDENTIAL', 'GARDEN', 'PARTHOUSE', 'TANHOUSE']);
//   // const typeBuildingApartaments = faker.helpers.arrayElement([
//   //   'Квартира в новостройке',
//   //   'Вторичное жильё',
//   // ]);
//   // const typeBuildingHouse = typeHouse === 'GARDEN' ? 'Земля сельхозназначения' : 'ИЖС';
//   // const floorMax = faker.number.int({ min: 3, max: 20 });
//   // const floor = `${faker.number.int({ min: 1, max: floorMax })}/${floorMax}`;
//   // let kitchenSquare = faker.number.int({ min: 6, max: 14 });
//   // const bedroomSquare = faker.number.int({ min: 15, max: 24 });
//   // const squareHouse = faker.number.int({ min: 6, max: 25 });
//   // const squareGarden = faker.number.int({ min: 3, max: 10 });
//   // const address = `${faker.helpers.arrayElement(cityes)}, ул. ${faker.location.street()}, ${faker.number.int(100)}`;
//   // const addressHouse = `пгт. ${faker.helpers.arrayElement(pgts)}, ул. ${faker.location.street()}, ${faker.number.int(100)}`;
//   // let pricePerMeter = faker.number.int({ min: 700, max: 1200 });
//   // let totalSquare = 0;
//   // let name = '';
//   // let nameHouse = '';
//   // let square = 0;
//   // let squareBuilding = 0;
//   //
//         const tags = faker.helpers.arrayElements(tagsArray, { min: 3, max: 8 });
//         const countries = faker.helpers.arrayElements(countriesData, {
//           min: 1,
//           max: 4,
//         });
//         const transport =faker.helpers.arrayElements(
//           ['plane', 'bus', 'bicycle', 'run'],
//           {
//             min: 1,
//             max: 4,
//           },
//         );
//
//   const card: Prisma.Card = {
//         firstName: faker.person.firstName(sex),
//         lastName: faker.person.lastName(sex),
//         photoUrl: `https://xsgames.co/randomusers/avatar.php?g=${sex}`,
//         likes: faker.number.int({ min: 10, max: 10000 }),
//         level: faker.number.int({ min: 3, max: 80 }),
//   };
//
//
//   const fullData = {
//     card,
//     tags,
//     countries,
//     transport
//
//   };
//
//   dataMock.push(fullData);
// }
//
// async function main() {
//   console.log(`Start seeding ...`);
//   for (const item of dataMock) {
//     await prisma.apartment.create({
//       data: item.apartment,
//     });
//   }
//   console.log(`Seeding finished.`);
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
