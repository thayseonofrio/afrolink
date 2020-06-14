import express from "express"

import { createProfile } from "../controller/profile"

const router = express.Router()
console.log("router")
router.post("/profile", createProfile)

export default router;