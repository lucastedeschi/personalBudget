import * as mongoose from 'mongoose';

export var UserModel = mongoose.model<UserInterface>('User', 
    new mongoose.Schema({
            email: { type: String, required: true },
            name: { type: String },
            password: { type: String, required: true },
            createdOn: { type: Date }
        }, 
        { 
            toJSON: {
                virtuals: true
            }
        }
    ),
    'Users'
); 

export interface UserInterface extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    createdOn: Date;
};

