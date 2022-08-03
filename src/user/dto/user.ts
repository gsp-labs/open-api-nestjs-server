import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ example: '4581015c-6999-4c24-a7df-4477f719580b' })
  id: string;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'john@doe.com' })
  email: string;
}

class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'john@doe.com' })
  email: string;
}

export { UserDto, CreateUserDto };
