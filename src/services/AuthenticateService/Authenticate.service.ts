import Bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { singleton } from "tsyringe";
import { UserExpress } from "../../../@types/express";
import { config } from "../../../config/environment";
import UsersModel from "../../models/users.model";
import { ForgotPasswordQueue } from "../../queues/forgotPassword.queue";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceAuthenticateService from "./InterfaceAuthenticate.service";

@singleton()
export default class AuthenticateService
	extends BaseService
	implements InterfaceAuthenticateService
{
	constructor(protected model: UsersModel) {
		super();
	}

	public async login(
		username: string,
		password: string
	): Promise<responseSuccessType | responseFailType> {
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
				.where("username", username)
				.limit(1)
				.first();

			const isPasswordCorrect = await Bcrypt.compare(password, user.password);

			if (!isPasswordCorrect) {
				throw new Error("Mật khẩu không đúng!");
			}

			delete user.password;

			return this.successResponse({
				token: await Jwt.sign(user, config.APP_KEY as string, {
					expiresIn: config.TOKEN_EXPIRES,
				}),
				refreshToken: await Jwt.sign(user, config.REFRESH_TOKEN_KEY as string, {
					expiresIn: config.REFRESH_TOKEN_EXPIRES,
				}),
			});
		} catch (error) {
			console.log(error);

			return this.failResponse("Tài khoản hoặc mật khẩu không đúng!");
		}
	}

	public async refreshJwtToken(
		refresh_token: string
	): Promise<responseSuccessType | responseFailType> {
		try {
			const payload = await Jwt.verify(refresh_token, config.REFRESH_TOKEN_KEY);

			if (!payload) throw new Error("Can't verify refresh token");

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

			return this.successResponse({
				token: await Jwt.sign(user, config.APP_KEY as string, {
					expiresIn: config.TOKEN_EXPIRES,
				}),
			});
		} catch (error) {
			return this.failResponse("Không thể khởi tạo Token!");
		}
	}

	public async forgotPassword(
		email: string
	): Promise<responseSuccessType | responseFailType> {
		try {
			const queueForgotPassword = ForgotPasswordQueue;
			const user = await this.model
				.getQueryBuilder()
				.table("users")
				.select("email")
				.where("email", email)
				.first();

			if (user) {
				queueForgotPassword.add("send_mail", { email });
			}

			return this.successResponse([
				"Đã gửi 1 mail khôi phục mật khẩu tới email của bạn!",
			]);
		} catch (error) {
			console.log(error);

			// Always send success case for anti brute force attack
			return this.failResponse(
				"Đã gửi 1 mail khôi phục mật khẩu tới email của bạn!"
			);
		}
	}

	public async resetPassword(
		newPassword: string,
		token: string
	): Promise<responseSuccessType | responseFailType> {
		try {
			const payload = await Jwt.verify(token, config.APP_KEY as string);

			if (payload) {
				const user = payload as UserExpress;

				await this.model.update(
					{ password: await Bcrypt.hash(newPassword, 10) },
					{ email: user.email }
				);
			}

			return this.successResponse(["Thay đổi mật khẩu thành công"]);
		} catch (error) {
			return this.failResponse("Thay đổi mật khẩu thất bại!");
		}
	}
}
