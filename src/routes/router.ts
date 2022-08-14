import { createUser, deleteUser } from '@/controllers';
import express, { Router } from 'express';

const router: Router = express.Router();

router.post('/user', createUser);
router.delete('/user', deleteUser);

export default router;
