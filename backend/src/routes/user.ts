import { Router } from "express";
import { login, register } from "../controllers/user.js";

const router = Router();

router.post("/api/user/register", register);
router.post("/api/user/login", login);


export default router;
