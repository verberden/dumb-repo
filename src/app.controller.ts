import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './dto/hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query(new ValidationPipe({ transform: true })) helloDto: HelloDto): string {
    return this.appService.getHello(helloDto);
  }
}
