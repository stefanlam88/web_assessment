import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly phone: string;
    
    readonly skillsets: string;
    readonly hobby: string;
    readonly created_at: Date;
}
