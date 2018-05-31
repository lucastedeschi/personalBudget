"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String },
    password: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    }
});
//# sourceMappingURL=UserModel.js.map