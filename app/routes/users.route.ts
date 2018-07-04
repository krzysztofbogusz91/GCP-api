import * as Express from 'express';
import { controller } from './../controllers/users.controller';

const router = Express.Router()

//public
router.get('/', controller.getUsers)
router.get('/user', controller.getUser)

export const usersRoute = router;