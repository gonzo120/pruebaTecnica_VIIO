import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getTask, deleteTasks, updateTasks, getTasks, createTask } from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
const router = Router()

//router.get("/tasks", authRequired, (req, res)=>res.send('si esta autenticado'))
router.get("/tasks", authRequired, getTasks)

router.get("/task/:id", authRequired, getTask)

router.post("/task", authRequired, validateSchema(createTaskSchema), createTask)

router.put("/task/:id", authRequired, updateTasks)

router.delete("/task/:id", authRequired, deleteTasks)



export default router