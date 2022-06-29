import Bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";
import BaseController from "./base.controller";
import usersModel from "../models/users.model";
import { UserExpress } from "../@types/express";

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
					token: await Jwt.sign(user, process.env.APP_KEY as string, {
						expiresIn: process.env.TOKEN_EXPIRES,
					}),
					refreshToken: Jwt.sign(
						user,
						process.env.REFRESH_TOKEN_KEY as string,
						{
							expiresIn: process.env.REFRESH_TOKEN_EXPIRES,
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
				process.env.REFRESH_TOKEN_KEY
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
						token: await Jwt.sign(user, process.env.APP_KEY as string, {
							expiresIn: process.env.TOKEN_EXPIRES,
						}),
					})
				);
			}
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Không thể khởi tạo Token!"));
		}
	};
}

export default () => new AuthenticationController(usersModel());
