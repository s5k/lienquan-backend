import { Router as ExpressRouter } from "express";
import * as NewsController from "../controllers/news.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createNewsValidator,
	updateNewsValidator,
} from "../middlewares/validators/news.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();

router.get("/", NewsController.index);
router.get("/:id", NewsController.detail);

router.post(
	"/",
	authenticationMiddleware,
	validate(createNewsValidator),
	NewsController.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateNewsValidator),
	NewsController.update
);
router.delete("/:id", authenticationMiddleware, NewsController.destroy);

export default router;
