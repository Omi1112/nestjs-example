import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersService } from './user/users.service';

@Controller()
export class AppController {
  constructor(@Inject(UsersService) private userService: UsersService) {}

  @Get()
  async getHello(): Promise<User> {
    return await this.userService.findOne('1');
  }
}
