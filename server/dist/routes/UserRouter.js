"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserService_1 = require("../services/UserService");
class UserRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', this.getUsers);
        this.router.get('/:id', this.getUserById);
        this.router.get('/find/:email', this.getUserByEmail);
        this.router.post('/', this.postUser);
        this.router.put('/', this.putUser);
        this.router.delete('/:id', this.deleteUser);
    }
    getUsers(req, res, next) {
        let service = new UserService_1.UserService();
        service.findAll()
            .then(result => {
            res.status(200).json(result);
            return;
        })
            .catch(error => {
            res.status(500).send(error);
            return;
        });
    }
    ;
    postUser(req, res, next) {
        let service = new UserService_1.UserService();
        let user = req.body;
        service.insert(user)
            .then(result => {
            res.status(201).json(result);
            return;
        })
            .catch(error => {
            res.status(500).send(error);
            return;
        });
    }
    getUserById(req, res, next) {
        let service = new UserService_1.UserService();
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
    getUserByEmail(req, res, next) {
        let service = new UserService_1.UserService();
        let email = req.params.email;
        service.findByEmail(email)
            .then(result => {
            res.status(200).json(result);
            return;
        })
            .catch(error => {
            res.status(500).send(error);
            return;
        });
    }
    putUser(req, res, next) {
        let service = new UserService_1.UserService();
        let user = req.body;
        service.update(user)
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
    deleteUser(req, res, next) {
        let service = new UserService_1.UserService();
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
    static get router() {
        return new UserRouter().router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=UserRouter.js.map