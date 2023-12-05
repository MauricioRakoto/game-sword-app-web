import express from "express";
import { signupUser, signinUser, getUsers, getUser, updateUser, deleteUser, getUserProfile, logoutUser, followUnFollowUser } from "../controllers/userController.js"
const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.post('/users/signup', signupUser)
router.post('/users/signin', signinUser)
router.post('/users/logout', logoutUser)
router.post('/users/follow/:id', followUnFollowUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

// Profile
router.get('/users/profile/:id', getUserProfile)

export default router