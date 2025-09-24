import { Router } from "express";
import { loadUser, login, register } from "../controllers/user.js";

const router = Router();

router.post("/api/user/register", register);
router.post("/api/user/login", login);
router.get("/api/user/loadUser", loadUser);

export default router;
