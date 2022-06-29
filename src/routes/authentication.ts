import { Router as ExpressRouter } from "express";
import AuthenticationController from "../controllers/authentication.controller";
import { loginValidator } from "../middlewares/validators/login.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceAuthenticationController = AuthenticationController();

router.post(
	"/login",
	validate(loginValidator),
	instanceAuthenticationController.login
);

export default router;
