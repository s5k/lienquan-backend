export const config = {
	APP_KEY: process.env.APP_KEY as string | "",
	REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY as string | "",
	TOKEN_EXPIRES: process.env.TOKEN_EXPIRES as string | "",
	REFRESH_TOKEN_EXPIRES: process.env.REFRESH_TOKEN_EXPIRES as string | "",
	REDIS_HOST: process.env.REDIS_HOST as string | "",
	REDIS_PORT: process.env.REDIS_PORT as number | "",
	REDIS_PASS: process.env.REDIS_PASS as string | "",
	MAIL_FROM: process.env.MAIL_FROM as string | "",
	MAIL_HOST: process.env.MAIL_HOST as string | "",
	MAIL_PORT: process.env.MAIL_PORT as number | "",
	MAIL_USER: process.env.MAIL_USER as string | "",
	MAIL_PASS: process.env.MAIL_PASS as string | "",
	UPLOAD_MAX_SIZE: process.env.UPLOAD_MAX_SIZE as number | "",
	NODE_ENV: process.env.NODE_ENV as string | "development",
	EXCEPTION_CODE: process.env.EXCEPTION_CODE | 400,
};
