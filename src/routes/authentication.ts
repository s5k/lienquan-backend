import { Router as ExpressRouter } from "express";
import * as AuthenticationController from "../controllers/authentication.controller";
import { loginValidator } from "../middlewares/validators/login.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter()

router.post('/login', validate(loginValidator), AuthenticationController.login)

export default router;