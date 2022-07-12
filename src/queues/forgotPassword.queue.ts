import { Queue } from "bullmq";
import { redisConfig } from "../../config/redis";

export const QUEUE_FORGOT_PASSWORD = "forgot_password";

export const ForgotPasswordQueue = new Queue(QUEUE_FORGOT_PASSWORD, {
	defaultJobOptions: {
		attempts: 3,
		backoff: {
			type: "exponential",
			delay: 1000,
		},
	},
	connection: redisConfig,
});
