import * as Express from 'express';
import { controller } from './../controllers/users.controller';

const router = Express.Router()

//public
router.get('/', controller.getUsers)

export const usersRoute = router;