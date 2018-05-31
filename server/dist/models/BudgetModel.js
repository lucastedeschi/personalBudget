"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BudgetModel = mongoose.model('Budget', new mongoose.Schema({
    description: { type: String },
    value: { type: Number },
    type: { type: String },
    category: { type: String },
    userId: { type: String },
    createdOn: { type: Date }
}, {
    toJSON: {
        virtuals: true
    }
}), 'Budgets');
;
//# sourceMappingURL=BudgetModel.js.map