import * as express from "express";
import { UserService } from "../services/UserService";
import { UserInterface } from "../models/UserModel";

export class UserRouter {
    private router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/', this.getUsers);
        this.router.get('/:id', this.getUserById);
        this.router.get('/find/:email', this.getUserByEmail);
        this.router.post('/', this.postUser);
        this.router.put('/', this.putUser);
        this.router.delete('/:id', this.deleteUser);
    }

    private getUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();

        service.findAll()
            .then(result => {
                res.status(200).json(result);
                return;
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            }); 
    };

    private postUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();
        
        let user: UserInterface = req.body;
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

    private getUserById(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();

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

    private getUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();
        
        let email: string = req.params.email;
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

    private putUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();
        
        let user: UserInterface = req.body;
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

    private deleteUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        let service = new UserService();

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

    public static get router(): express.Router {
        return new UserRouter().router;
    }
}
