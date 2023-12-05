import express from "express";
import { addGenre, getGenres, getGenre, updateGenre, deleteGenre } from "../controllers/genreController.js"
const router = express.Router();

router.get('/genres', getGenres)
router.get('/genres/:id', getGenre)
router.post('/genres', addGenre)
router.put('/genres/:id', updateGenre)
router.delete('/genres/:id', deleteGenre)

// Profile

export default router