import { Injectable } from '@nestjs/common';
import { HelloDto } from './dto/hello.dto';

@Injectable()
export class AppService {
  getHello(helloDto: HelloDto): string {
    return `${helloDto.id} Hello World!`;
  }
}
