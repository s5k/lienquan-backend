import Bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";
import BaseController from "./base.controller";
import usersModel from "../models/users.model";
import { UserExpress } from "../@types/express";
import forgotPasswordQueue from "../queues/forgotPassword.queue";
import { config } from "../../config/environment";

class AuthenticationController extends BaseController {
	login = async (req: Request, res: Response): Promise<void> => {
		try {
			const user = await this.model
				.getQueryBuilder()
				.select([
					"id",
					"full_name",
					"email",
					"username",
					"password",
					"created_at",
					"updated_at",
				])
				.from("users")
				.where("username", req.body.username)
				.limit(1)
				.first();

			const isPasswordCorrect = await Bcrypt.compare(
				req.body.password,
				user.password
			);

			if (!isPasswordCorrect) {
				throw new Error("Mật khẩu không đúng!");
			}

			delete user.password;

			res.send(
				successResponse({
					token: await Jwt.sign(user, config.APP_KEY as string, {
						expiresIn: config.TOKEN_EXPIRES,
					}),
					refreshToken: await Jwt.sign(
						user,
						config.REFRESH_TOKEN_KEY as string,
						{
							expiresIn: config.REFRESH_TOKEN_EXPIRES,
						}
					),
				})
			);
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Tài khoản hoặc mật khẩu không đúng!"));
		}
	};

	refreshJwtToken = async (req: Request, res: Response) => {
		try {
			const payload = await Jwt.verify(
				req.body.refresh_token,
				config.REFRESH_TOKEN_KEY
			);

			if (payload) {
				const convertPayloadToUser = payload as UserExpress;
				const user = await this.model
					.getQueryBuilder()
					.select([
						"id",
						"full_name",
						"email",
						"username",
						"created_at",
						"updated_at",
					])
					.from("users")
					.where("id", convertPayloadToUser.id)
					.limit(1)
					.first();

				res.send(
					successResponse({
						token: await Jwt.sign(user, config.APP_KEY as string, {
							expiresIn: config.TOKEN_EXPIRES,
						}),
					})
				);
			}
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Không thể khởi tạo Token!"));
		}
	};

	forgotPassword = async (req: Request, res: Response) => {
		try {
			const { email } = req.body;
			const queueForgotPassword = forgotPasswordQueue();
			const user = await this.model
				.getQueryBuilder()
				.table("users")
				.select("email")
				.where("email", email)
				.first();

			if (user) {
				queueForgotPassword.add("send_mail", { email });
			}

			res
				.status(201)
				.send(
					successResponse([
						"Đã gửi 1 mail khôi phục mật khẩu tới email của bạn!",
					])
				);
		} catch (error) {
			console.log(error);

			// Always send success case for anti brute force attack
			res
				.status(201)
				.send(
					successResponse([
						"Đã gửi 1 mail khôi phục mật khẩu tới email của bạn!",
					])
				);
		}
	};

	resetPassword = async (req: Request, res: Response) => {
		try {
			const { new_password, token } = req.body;
			const payload = await Jwt.verify(token, config.APP_KEY as string);

			if (payload) {
				const user = payload as UserExpress;

				await this.model.update(
					{ password: await Bcrypt.hash(new_password, 10) },
					{ email: user.email }
				);
			}

			res.status(201).send(successResponse(["Thay đổi mật khẩu thành công"]));
		} catch (error) {
			res.status(400).send(failResponse("Thay đổi mật khẩu thất bại!"));
		}
	};
}

export default () => new AuthenticationController(usersModel());
