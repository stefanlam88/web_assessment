import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    skillsets: String,
    hobby: String,
    created_at: { type: Date, default: Date.now }
})
