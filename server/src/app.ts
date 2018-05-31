import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRouter } from "./routes/UserRouter";
import { BudgetRouter } from "./routes/BudgetRouter";

export class App {
    private expressApp: express.Express = express();

    constructor() {
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
    }
    
    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
          res.json({
            message: 'Welcome to Personal Budget Server!'
          });
        });
    
        this.expressApp.use('/', router);
        this.expressApp.use('/user', UserRouter.router);
        this.expressApp.use('/budget', BudgetRouter.router);
    }

    public static get express(): express.Express {
        return new App().expressApp;
    }
}