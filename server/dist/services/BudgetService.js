"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BudgetModel_1 = require("../models/BudgetModel");
class BudgetService {
    constructor() {
        this.connectionString = 'mongodb://ltedeschi:z4w0i5r9@ds016058.mlab.com:16058/personal-budget';
        mongoose.connect(this.connectionString);
    }
    findAllByUserId(userId) {
        return new Promise((resolve, reject) => {
            BudgetModel_1.BudgetModel.find({ userId: userId }).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    insert(budget) {
        return new Promise((resolve, reject) => {
            var budgetModel = new BudgetModel_1.BudgetModel({
                description: budget.description,
                value: budget.value,
                type: budget.type,
                category: budget.category,
                userId: budget.userId,
                createdOn: new Date()
            });
            budgetModel.save((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            BudgetModel_1.BudgetModel.findById(id).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
    remove(id) {
        return new Promise((resolve, reject) => {
            BudgetModel_1.BudgetModel.findByIdAndRemove(id).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    removeByUserId(userId) {
        return new Promise((resolve, reject) => {
            BudgetModel_1.BudgetModel.remove({ userId: userId }).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(true);
            });
        });
    }
    update(budget) {
        let id = budget._id;
        return new Promise((resolve, reject) => {
            BudgetModel_1.BudgetModel.findByIdAndUpdate(id, budget).lean()
                .exec((error, res) => {
                if (error)
                    reject(error);
                resolve(res);
            });
        });
    }
}
exports.BudgetService = BudgetService;
//# sourceMappingURL=BudgetService.js.map