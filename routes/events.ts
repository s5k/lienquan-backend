import { Router as ExpressRouter } from "express";
import * as EventsController from "../controllers/events.controller";
const router = ExpressRouter()

router.get('/', EventsController.index)

export default router;