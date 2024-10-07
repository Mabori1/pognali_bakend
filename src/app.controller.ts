import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { TravelDto } from './dto/travels.dto';
import { CardRdo } from './rdo/card.rdo';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('travels')
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    type: TravelDto,
    status: HttpStatus.OK,
    description: 'Создание карточки путешествия',
  })
  @Post('/')
  public async CreateTravel(@Body() dto: TravelDto) {
    const newTravels = await this.appService.createTravel(dto);
    return newTravels;
  }

  @ApiResponse({
    type: CardRdo,
    status: HttpStatus.OK,
    description: 'Получить рандомные карточки',
  })
  @Get('/')
  async getTravels(@Query() query: PaginationDTO) {
    const travels = await this.appService.getTravels(query);

    return travels;
  }
}
