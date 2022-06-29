declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_KEY: string;
			REFRESH_TOKEN_KEY: string;
			TOKEN_EXPIRES: string;
			REFRESH_TOKEN_EXPIRES: string;
			NODE_ENV: "development" | "production";
		}
	}
}

export {};
