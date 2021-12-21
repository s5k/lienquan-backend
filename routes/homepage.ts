import { Router as ExpressRouter } from "express";
import * as HomepageController from "../controllers/homepage.controller";
const router = ExpressRouter()

router.get('/', HomepageController.index)

export default router;