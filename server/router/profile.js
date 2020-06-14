import express from "express"

import { createProfile } from "../controller/profile"

const router = express.Router()

router.post("/profile", createProfile)

export default router;