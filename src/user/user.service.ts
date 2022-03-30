import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(user: any) {
    try {
      const userEntity = this.userRepository.create(user);
      const res = await this.userRepository.insert(userEntity);
      return res;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }
  findOne(query: FindConditions<User>) {
    return this.userRepository.findOne(query);
  }

}
