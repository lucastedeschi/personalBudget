"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const UserRouter_1 = require("./routes/UserRouter");
const BudgetRouter_1 = require("./routes/BudgetRouter");
class App {
    constructor() {
        this.expressApp = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Welcome to Personal Budget Server!'
            });
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/user', UserRouter_1.UserRouter.router);
        this.expressApp.use('/budget', BudgetRouter_1.BudgetRouter.router);
    }
    static get express() {
        return new App().expressApp;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map