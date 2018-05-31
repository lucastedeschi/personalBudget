import * as express from "express";
import { BudgetService } from "../services/BudgetService";
import { BudgetInterface } from "../models/BudgetModel";

export class BudgetRouter {
    private router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/find/:userId', this.getBudgetsByUser);
        this.router.get('/:id', this.getBudgetById);
        this.router.post('/', this.postBudget);
        this.router.put('/', this.putBudget);
        this.router.delete('/:id', this.deleteBudget);
        this.router.delete('/byUser/:userId', this.deleteBudgetsByUser);
    }

    private getBudgetsByUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();
        
        let userId: string = req.params.userId;
        service.findAllByUserId(userId)
            .then(result => {
                res.status(200).json(result);
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });        
    }

    private getBudgetById(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();
        
        let id: string = req.params.id;
        service.findById(id)
            .then(result => {
                res.status(200).json(result);
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }

    private postBudget(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();

        let budget: BudgetInterface = req.body;
        service.insert(budget)
            .then(result => {
                res.status(201).json(result);
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }

    private putBudget(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();
        
        let budget: BudgetInterface = req.body;
        service.update(budget)
            .then(result => {
                res.status(200).json({
                    message: "Updated with succesfull"
                });
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            }); 
    }

    private deleteBudget(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();
        
        let id: string = req.params.id;
        service.remove(id)
            .then(result => {
                res.status(200).json({
                    message: "Deleted with succesfull"
                });
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }

    private deleteBudgetsByUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new BudgetService();
        
        let userId: string = req.params.userId;
        service.removeByUserId(userId)
            .then(result => {
                res.status(200).json({
                    message: "Deleted with succesfull"
                });
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }

    public static get router(): express.Router {
        return new BudgetRouter().router;
    }
}
