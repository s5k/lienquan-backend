import { Router as ExpressRouter } from "express";
import * as MediaController from "../controllers/media.controller";
const router = ExpressRouter();

router.get("/", MediaController.index);

export default router;
