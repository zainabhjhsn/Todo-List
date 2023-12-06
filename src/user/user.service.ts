import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
 
@Injectable()
export class UserService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data: createUserDto});
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where: { id: id }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({where: { id: id }, data: updateUserDto});
  }

  remove(id: number) {
    return this.prisma.user.delete({where: { id: id }});
  }
}
