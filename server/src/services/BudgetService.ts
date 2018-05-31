import * as mongoose from "mongoose";
import { BudgetModel, BudgetInterface } from "../models/BudgetModel";

export class BudgetService {
    private connectionString: string = 'mongodb://ltedeschi:z4w0i5r9@ds016058.mlab.com:16058/personal-budget';

    constructor() {
        mongoose.connect(this.connectionString);
    }

    public findAllByUserId(userId: string): Promise<BudgetInterface[]> {
        return new Promise((resolve, reject) => {
            BudgetModel.find({userId: userId}).lean()
                .exec((error: any, res: BudgetInterface[]) => {
                    if(error) reject(error);
                    resolve(res);
                });
        }); 
    }

    public insert(budget: BudgetInterface): Promise<BudgetInterface> {
        return new Promise((resolve, reject) => {
            var budgetModel = new BudgetModel({ 
                description: budget.description, 
                value: budget.value, 
                type: budget.type,
                category: budget.category,
                userId: budget.userId,
                createdOn: new Date()
            });

            budgetModel.save((error: any, res: BudgetInterface) => {
                if(error) reject(error);
                resolve(res);
            });
        });      
    }

    public findById(id: string): Promise<BudgetInterface> {
        return new Promise((resolve, reject) => {
            BudgetModel.findById(id).lean()
                .exec((error: any, res: BudgetInterface) => {
                    if(error) reject(error);
                    resolve(res);
                });
        });
    }

    public remove(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            BudgetModel.findByIdAndRemove(id).lean()
                .exec((error: any , res: any) => {
                    if(error) reject(error);
                    resolve(true);
                });
        });
    }

    public removeByUserId(userId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            BudgetModel.remove({userId: userId}).lean()
                .exec((error: any , res: any) => {
                    if(error) reject(error);
                    resolve(true);
                });
        });
    }

    public update(budget: BudgetInterface): Promise<any> {
        let id = budget._id;
        return new Promise((resolve, reject) => {
            BudgetModel.findByIdAndUpdate(id, budget).lean()
                .exec((error: any, res: any) => {
                    if(error) reject(error);
                    resolve(res);
                });
        });
    }
}