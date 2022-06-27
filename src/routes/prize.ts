import { Router as ExpressRouter } from "express";
import * as PrizeController from "../controllers/prize.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();

router.get("/", PrizeController.index);
router.patch("/", authenticationMiddleware, validate(settingsValidator), PrizeController.update)

export default router;
