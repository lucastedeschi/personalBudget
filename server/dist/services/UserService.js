"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel_1 = require("../models/UserModel");
class UserService {
    constructor() {
        this.connectionString = 'mongodb://ltedeschi:z4w0i5r9@ds016058.mlab.com:16058/personal-budget';
        mongoose.connect(this.connectionString);
    }
    findAll() {
        return new Promise((resolve, reject) => {
            UserModel_1.UserModel.find({}).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    insert(user) {
        return new Promise((resolve, reject) => {
            var userModel = new UserModel_1.UserModel({
                name: user.name,
                email: user.email,
                password: user.password,
                createdOn: new Date()
            });
            userModel.save((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            UserModel_1.UserModel.findById(id).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    findByEmail(email) {
        return new Promise((resolve, reject) => {
            UserModel_1.UserModel.findOne({ email: email }).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    remove(id) {
        return new Promise((resolve, reject) => {
            UserModel_1.UserModel.findByIdAndRemove(id).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    update(user) {
        let id = user._id;
        return new Promise((resolve, reject) => {
            UserModel_1.UserModel.findByIdAndUpdate(id, user).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map