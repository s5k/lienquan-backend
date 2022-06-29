import { Router as ExpressRouter } from "express";
import TeamsController from "../controllers/teams.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createTeamsValidator,
	updateTeamsValidator,
} from "../middlewares/validators/teams.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceTeamsController = TeamsController();

router.get("/", instanceTeamsController.index);
router.post(
	"/",
	authenticationMiddleware,
	validate(createTeamsValidator),
	instanceTeamsController.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateTeamsValidator),
	instanceTeamsController.update
);
router.delete(
	"/:id",
	authenticationMiddleware,
	instanceTeamsController.destroy
);

export default router;
