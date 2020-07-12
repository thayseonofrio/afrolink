import express from "express"

import { createProfile, getAll } from "../controller/profile"

const router = express.Router()

router.post("/profile", createProfile)
router.get("/profile", getAll)

export default router