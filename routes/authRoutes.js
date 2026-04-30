import express from "express"

// import {register , login , logout , loggedInUser} from "../controllers/authController.js"
import {register , login , logout , getme} from "../controllers/authController.js"

const router = express.Router()

router.post("/register" , register);
router.post("/login" , login);
router.post("/logout" , logout);
// router.get("/loggedInUser" , loggedInUser);

router.get("/get-me" , getme);


export default router