import { Router as ExpressRouter } from "express";
import * as EventsController from "../controllers/events.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createEventsValidator,
	updateEventsValidator,
} from "../middlewares/validators/events.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();

router.get("/", EventsController.index);

router.post(
	"/",
	authenticationMiddleware,
	validate(createEventsValidator),
	EventsController.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateEventsValidator),
	EventsController.update
);
router.delete("/:id", authenticationMiddleware, EventsController.destroy);

export default router;
