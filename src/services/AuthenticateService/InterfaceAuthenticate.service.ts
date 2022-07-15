import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceAuthenticateService
	extends InterfaceBaseService {
	login(
		username: string,
		password: string
	): Promise<responseSuccessType | responseFailType>;

	refreshJwtToken(
		refresh_token: string
	): Promise<responseSuccessType | responseFailType>;

	forgotPassword(
		email: string
	): Promise<responseSuccessType | responseFailType>;

	resetPassword(
		newPassword: string,
		token: string
	): Promise<responseSuccessType | responseFailType>;
}
