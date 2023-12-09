import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto {
    
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 20, {message: 'Password has to be between 4 and 20 chars'})
    password: string;
}
