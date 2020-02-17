import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    // fetch all customers
    async getAllUser(): Promise<Customer[]> {
        const users = await this.userModel.find().exec();
        return users;
    }
    // Get a single user
    async getUser(userID): Promise<User> {
        const user = await this.userModel.findById(userID).exec();
        return user;
    }
    // post a single user
    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await this.customerModel(createUserDTO);
        return newUser.save();
    }
    // Edit user details
    async updateUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(userID, createUserDTO, { new: true });
        return updatedUser;
    }
    // Delete a user
    async deleteCustomer(customerID): Promise<any> {
        const deletedUser = await this.userModel.findByIdAndRemove(customerID);
        return deletedUser;
    }
}
