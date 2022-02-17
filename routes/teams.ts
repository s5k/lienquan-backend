import { Router as ExpressRouter } from "express";
import * as TeamsController from "../controllers/teams.controller";
const router = ExpressRouter()

router.get('/', TeamsController.index)

export default router;