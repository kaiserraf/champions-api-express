import { Router } from "express";
import * as playerController from "../controllers/playerController";

const router = Router();

router.get('/players', playerController.getPlayer);
router.get('/players/:id', playerController.getPlayerById);

router.post('/players', playerController.postPlayer);

router.delete('/players/:id', playerController.deletePlayer);

router.patch('players/:id', playerController.updatePlayer)

export default router;