export enum TransportType {
  PLANE = 'plane',
  BUS = 'bus',
  BICYCLE = 'bicycle',
  RUN = 'run',
}

export type CountryData = {
  flags: string;
  alt: string;
  name: string;
  region: string;
};

export type TravelDates = {
  startDate: string;
  endDate: string;
};

export type Card = {
  uuid: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  tags: string[];
  countries: CountryData[];
  transport: string[];
  likes: number;
  level: number;
};
