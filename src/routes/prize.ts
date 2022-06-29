import { Router as ExpressRouter } from "express";
import PrizeController from "../controllers/prize.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instancePrizeController = PrizeController();

router.get("/", instancePrizeController.index);
router.patch(
	"/",
	authenticationMiddleware,
	validate(settingsValidator),
	instancePrizeController.update
);

export default router;
