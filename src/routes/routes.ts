import { Router } from "express";
import * as playerController from "../controllers/playerController";

const router = Router();

router.get('/players', playerController.getPlayer);
router.get('/players/:id', playerController.getPlayerById);

export default router;