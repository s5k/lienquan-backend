import { Router as ExpressRouter } from "express";
import NewsController from "../controllers/news.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createNewsValidator,
	updateNewsValidator,
} from "../middlewares/validators/news.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceNewsController = NewsController();
router.get("/", instanceNewsController.index);
router.get("/:id", instanceNewsController.detail);

router.post(
	"/",
	authenticationMiddleware,
	validate(createNewsValidator),
	instanceNewsController.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateNewsValidator),
	instanceNewsController.update
);
router.delete("/:id", authenticationMiddleware, instanceNewsController.destroy);

export default router;
