import { Request, Response } from "express";
import BaseController from "./base.controller";
import Controller from "../../@decorators/classes/controller.classes";
import { Post, Put } from "../../@decorators/methods/routes.methods";
import { validate } from "../middlewares/validators/wrapper.validator";
import { loginValidator } from "../middlewares/validators/login.validations";
import { emailValidator } from "../middlewares/validators/email.validations";
import { resetPassword } from "../middlewares/validators/resetPassword.validations";
import InterfaceAuthenticateService from "../services/AuthenticateService/InterfaceAuthenticate.service";
import { inject } from "tsyringe";

@Controller("auth")
export default class AuthenticationController extends BaseController {
	constructor(
		@inject("InterfaceAuthenticateService")
		protected service: InterfaceAuthenticateService
	) {
		super();
	}

	@Post("/login", { before: [validate(loginValidator)] })
	public async login(req: Request, res: Response): Promise<void> {
		const response = await this.service.login(
			req.body.username,
			req.body.password
		);

		res.status(response.status ? 200 : 400).send(response);
	}

	@Post("/refresh_token")
	public async refreshJwtToken(req: Request, res: Response) {
		const response = await this.service.refreshJwtToken(req.body.refresh_token);
		res.status(response.status ? 200 : 400).send(response);
	}

	@Post("/forgot_password", { before: [validate(emailValidator)] })
	public async forgotPassword(req: Request, res: Response) {
		const response = await this.service.forgotPassword(req.body.email);
		res.status(response.status ? 200 : 400).send(response);
	}

	@Put("/reset_password", { before: [validate(resetPassword)] })
	public async resetPassword(req: Request, res: Response) {
		const response = await this.service.resetPassword(
			req.body.new_password,
			req.body.token
		);
		res.status(response.status ? 200 : 400).send(response);
	}
}
