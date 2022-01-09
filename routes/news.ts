import { Router as ExpressRouter } from "express";
import * as NewsController from "../controllers/news.controller";
const router = ExpressRouter()

router.get('/', NewsController.index)
router.get('/:id', NewsController.detail)

export default router;