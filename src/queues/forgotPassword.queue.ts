import { Queue } from "bullmq";
import { redisConfig } from "../../config/redis";

export default (): Queue => {
	return new Queue("forgot_password", {
		defaultJobOptions: {
			attempts: 3,
			backoff: {
				type: "exponential",
				delay: 1000,
			},
		},
		connection: redisConfig,
	});
};
