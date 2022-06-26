import { Router as ExpressRouter } from "express";
import * as HomepageController from "../controllers/homepage.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter()

router.get('/', HomepageController.index)
router.patch('/', authenticationMiddleware, validate(settingsValidator), HomepageController.update)

export default router;