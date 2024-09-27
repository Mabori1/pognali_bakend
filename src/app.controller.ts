import { Body, Controller, Get, HttpStatus, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { TravelDto } from './dto/travels.dto';
import { CardRdo } from './rdo/card.rdo';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    type: TravelDto,
    status: HttpStatus.OK,
    description: 'Создание карточки путешествия',
  })
  @Post('travels')
  public async CreateTravel(@Body() dto: TravelDto) {
    const newTravels = await this.appService.createTravel(dto);
    return newTravels;
  }

  @ApiResponse({
    type: CardRdo,
    status: HttpStatus.OK,
    description: 'Создание карточки путешествия',
  })
  @Post('travels')
  public async createTravel(@Body() dto: TravelDto) {
    const newTravels = await this.appService.createTravel(dto);
    return newTravels;
  }

  @ApiResponse({
    type: CardRdo,
    status: HttpStatus.OK,
    description: 'Получить рандомные карточки',
  })
  @Get('travels')
  async getTravels() {
    const travels = await this.appService.getTravels();

    return travels;
  }
}
