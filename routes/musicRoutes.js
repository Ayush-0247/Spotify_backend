import express from "express"


// import {register , login , logout , getme} from "../controllers/authController.js"
import {uploadMusic} from "../controllers/musicController.js"

const router = express.Router()

router.post("/upload" , uploadMusic);
// router.post("/login" , login);
// router.post("/logout" , logout);
// router.get("/loggedInUser" , loggedInUser);

// router.get("/get-me" , getme);


export default router