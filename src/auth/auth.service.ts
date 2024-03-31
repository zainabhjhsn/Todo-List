import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  prisma: PrismaClient;
  
  constructor() {
    this.prisma = new PrismaClient();
  }

  async signup(dto: AuthDto){
    const {userName, email, password} = dto;

    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        userName,
        email,
        hashedPassword,
      },
      select: {
        id: true,
        userName: true,
        email: true,
    }
    });

    return {message: 'User created successfully'}
  }

  async signin(){
    return {message: 'signin was successfull'}
  }

  async signout(){
    return {message: 'signout was successfull'}
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  
}
