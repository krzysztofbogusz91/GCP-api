import * as Express from "express";
import { controller } from "./../controllers/users.controller";
import { verifyToken } from "./../middlewares/verifyToken";
import { controllerAuth } from "../controllers/auth.controller";

const router = Express.Router();

//public
router.get("/", controller.getUsers);
router.post("/", controllerAuth.logIn);
router.post("/register", controller.postUser);

//private
router.get("/user", verifyToken, controller.getUser);

export const usersRoute = router;
