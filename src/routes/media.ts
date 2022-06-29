import { Router as ExpressRouter } from "express";
import MediaController from "../controllers/media.controller";
const router = ExpressRouter();
const instanceMediaController = MediaController();

router.get("/", instanceMediaController.index);

export default router;
