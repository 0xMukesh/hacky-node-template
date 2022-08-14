import express, { Router } from "express";

import { createUser, deleteUser } from "@/controllers";

const router: Router = express.Router();

router.post("/user", createUser);
router.delete("/user", deleteUser);

export default router;
