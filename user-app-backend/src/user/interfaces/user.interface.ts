import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: string;
    readonly email: string;
    readonly phone: string;
    readonly skillsets: string;
    readonly hobby: string;
    readonly created_at: Date;
}
