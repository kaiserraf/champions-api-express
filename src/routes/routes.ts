import { Router } from "express";
import { getPlayer } from "../controllers/playerController";

const router = Router();

router.get('/players', getPlayer);

export default router;