import { Injectable } from '@nestjs/common';
import { UserDto, CreateUserDto } from '../dto/user';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  private readonly users: UserDto[];

  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    return this.users;
  }

  async createUser(createUserReq: CreateUserDto) {
    const user = {
      id: randomUUID(),
      name: createUserReq.name,
      email: createUserReq.email,
    };
    this.users.push(user);
    return user;
  }
}
