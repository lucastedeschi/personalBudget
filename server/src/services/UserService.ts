import * as mongoose from "mongoose";
import { UserModel, UserInterface } from "../models/UserModel";

export class UserService {
    private connectionString: string = 'mongodb://ltedeschi:z4w0i5r9@ds016058.mlab.com:16058/personal-budget';

    constructor() {
        mongoose.connect(this.connectionString);
    }

    public findAll(): Promise<UserInterface[]> {
        return new Promise((resolve, reject) => {
            UserModel.find({}).lean()
                .exec((error: any, res: UserInterface[]) => {
                    if(error) reject(error);
                    resolve(res);
                });
        }); 
    }

    public insert(user: UserInterface): Promise<UserInterface> {
        return new Promise((resolve, reject) => {
            var userModel = new UserModel({ 
                name: user.name, 
                email: user.email, 
                password: user.password,
                createdOn: new Date()
            });
    
            userModel.save((error: any, res: UserInterface) => {
                if(error) reject(error);
                resolve(res);
            });
        });      
    }

    public findById(id: string): Promise<UserInterface> {
        return new Promise((resolve, reject) => {
            UserModel.findById(id).lean()
                .exec((error: any, res: UserInterface) => {
                    if(error) reject(error);
                    resolve(res);
                });
        });
    }

    public findByEmail(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.findOne({email: email}).lean()
                .exec((error: any, res: any) => {
                    if(error) reject(error);
                    resolve(res);
                });
        });
    }

    public remove(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.findByIdAndRemove(id).lean()
                .exec((error: any , res: any) => {
                    if(error) reject(error);
                    resolve(true);
                });
        });
    }

    public update(user: UserInterface): Promise<any> {
        let id = user._id;
        return new Promise((resolve, reject) => {
            UserModel.findByIdAndUpdate(id, user).lean()
                .exec((error: any, res: any) => {
                    if(error) reject(error);
                    resolve(res);
                });
        });
    }
}