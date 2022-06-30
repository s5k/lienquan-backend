import { Router as ExpressRouter } from "express";
import AuthenticationController from "../controllers/authentication.controller";
import { emailValidator } from "../middlewares/validators/email.validations";
import { loginValidator } from "../middlewares/validators/login.validations";
import { resetPassword } from "../middlewares/validators/resetPassword.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceAuthenticationController = AuthenticationController();

router.post(
	"/login",
	validate(loginValidator),
	instanceAuthenticationController.login
);

router.post("/refresh_token", instanceAuthenticationController.refreshJwtToken);

router.post(
	"/forgot_password",
	validate(emailValidator),
	instanceAuthenticationController.forgotPassword
);

router.put(
	"/reset_password",
	validate(resetPassword),
	instanceAuthenticationController.resetPassword
);

export default router;
