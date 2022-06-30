declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_KEY: string;
			REFRESH_TOKEN_KEY: string;
			TOKEN_EXPIRES: string;
			REFRESH_TOKEN_EXPIRES: string;
			REDIS_HOST: string;
			REDIS_PORT: number;
			REDIS_PASS: string;
			MAIL_FROM: string;
			MAIL_HOST: string;
			MAIL_PORT: number;
			MAIL_USER: string;
			MAIL_PASS: string;
			NODE_ENV: "development" | "production";
		}
	}
}

export {};
