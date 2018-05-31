"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const BudgetService_1 = require("../services/BudgetService");
class BudgetRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/find/:userId', this.getBudgetsByUser);
        this.router.get('/:id', this.getBudgetById);
        this.router.post('/', this.postBudget);
        this.router.put('/', this.putBudget);
        this.router.delete('/:id', this.deleteBudget);
        this.router.delete('/byUser/:userId', this.deleteBudgetsByUser);
    }
    getBudgetsByUser(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let userId = req.params.userId;
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
    getBudgetById(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let id = req.params.id;
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
    postBudget(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let budget = req.body;
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
    putBudget(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let budget = req.body;
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
    deleteBudget(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let id = req.params.id;
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
    deleteBudgetsByUser(req, res, next) {
        let service = new BudgetService_1.BudgetService();
        let userId = req.params.userId;
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
    static get router() {
        return new BudgetRouter().router;
    }
}
exports.BudgetRouter = BudgetRouter;
//# sourceMappingURL=BudgetRouter.js.map