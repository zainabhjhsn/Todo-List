import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TaskService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({data: createTaskDto});
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({where: { id: id }});
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({where: { id: id }, data: updateTaskDto});
  }

  remove(id: string) {
    return this.prisma.task.delete({where: { id: id }});
  }
}
