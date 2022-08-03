import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserDto, UserDto } from '../dto/user';

@Controller('users')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    type: [UserDto],
  })
  @Get()
  getUsers(): Promise<UserDto[]> {
    return this.userService.fetchUsers();
  }

  @ApiOkResponse({
    type: UserDto,
  })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
