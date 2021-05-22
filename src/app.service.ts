import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from './user/users.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
