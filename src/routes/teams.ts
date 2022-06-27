import { Router as ExpressRouter } from "express";
import * as TeamsController from "../controllers/teams.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createTeamsValidator,
	updateTeamsValidator,
} from "../middlewares/validators/teams.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();

router.get("/", TeamsController.index);
router.post(
	"/",
	authenticationMiddleware,
	validate(createTeamsValidator),
	TeamsController.create
);
router.put(
	"/:id",
	authenticationMiddleware,
	validate(updateTeamsValidator),
	TeamsController.update
);
router.delete("/:id", authenticationMiddleware, TeamsController.destroy);

export default router;
