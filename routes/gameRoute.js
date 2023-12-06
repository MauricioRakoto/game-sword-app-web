import express from "express";
import { addGame, deleteGame, getGame, getGames, updateGame } from "../controllers/gameController.js"
const router = express.Router();

router.get('/games', getGames)
router.get('/games/:id', getGame)
router.post('/games/:gamename', addGame)
router.put('/games/:id', updateGame)
router.delete('/games/:id', deleteGame)

// // Profile

export default router