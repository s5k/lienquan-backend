import { Router as ExpressRouter } from "express";
import EventsController from "../controllers/events.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createEventsValidator,
	updateEventsValidator,
} from "../middlewares/validators/events.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const InstanceEventConntroller = EventsController();

router.get("/", InstanceEventConntroller.index);

router.post(
	"/",
	authenticationMiddleware,
	validate(createEventsValidator),
	InstanceEventConntroller.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateEventsValidator),
	InstanceEventConntroller.update
);
router.delete(
	"/:id",
	authenticationMiddleware,
	InstanceEventConntroller.destroy
);

export default router;
