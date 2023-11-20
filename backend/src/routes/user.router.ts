import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { body } from "express-validator";
const router = Router();
const { create, find, findOne, login } = new UserController();

router.get("/", find);  
router.get("/:id", findOne);
router.post("/register", create);
router.post("/login", login);


export default router;
