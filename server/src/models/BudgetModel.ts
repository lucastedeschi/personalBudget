import * as mongoose from 'mongoose';

export var BudgetModel = mongoose.model<BudgetInterface>('Budget', 
    new mongoose.Schema({
            description: { type: String },
            value: { type: Number },
            type: { type: String },
            category: { type: String },
            userId: { type: String },
            createdOn: { type: Date }
        }, 
        { 
            toJSON: {
                virtuals: true
            }
        }
    ),
    'Budgets'
); 

export interface BudgetInterface extends mongoose.Document {
    description: string;
    value: number;
    type: string;
    category: string;
    userId: string;
    createdOn: Date;
};

