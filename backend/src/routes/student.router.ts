import { StudentController } from "../controllers/student.controller";
import { Router } from "express";
import { body } from "express-validator";
const router = Router();
const { create, find, findOne, update, deleteOne } = new StudentController();

router.get("/", find);
router.get("/:id", findOne);
router.post("/create", create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteOne)
export default router;
