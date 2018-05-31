"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserModel = mongoose.model('User', new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String },
    password: { type: String, required: true },
    createdOn: { type: Date }
}, {
    toJSON: {
        virtuals: true
    }
}), 'Users');
;
//# sourceMappingURL=UserModel.js.map