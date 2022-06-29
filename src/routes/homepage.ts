import { Router as ExpressRouter } from "express";
import HomepageController from "../controllers/homepage.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceHomepageController = HomepageController();

router.get("/", instanceHomepageController.index);
router.patch(
	"/",
	authenticationMiddleware,
	validate(settingsValidator),
	instanceHomepageController.update
);

export default router;
