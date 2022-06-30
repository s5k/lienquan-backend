import { Job, QueueScheduler, Worker } from "bullmq";
import Jwt from "jsonwebtoken";
import { config } from "../../../config/environment";
import mail from "../../../config/mail";
import { redisConfig } from "../../../config/redis";

/**
 * For example I didn't have the UI for Reset Password,
 * so you should copy the hash and paste it into body of API: /auth/reset_password
 * @param job
 */
async function sendMailForgotPassword(job: Job) {
	const token = await Jwt.sign(
		{ email: job.data.email },
		config.APP_KEY as string,
		{
			expiresIn: "1h",
		}
	);
	(await mail()).sendMail({
		from: config.MAIL_FROM,
		to: `${job.data.email}, ${job.data.email}`,
		subject: "Khôi phục mật khẩu",
		html: `
			<p>Vui lòng sao chép đoạn mã này <b>${token}</b> để thay đổi mật khẩu. Nếu không phải là bạn vui lòng bỏ qua.</p>
			`,
	});
}

const forgotPasswordQueue = new Worker(
	"forgot_password",
	sendMailForgotPassword,
	{
		connection: redisConfig,
	}
);

const forgotPasswordQueueScheduler = new QueueScheduler("forgot_password", {
	connection: redisConfig,
});

process.on("SIGTERM", async () => {
	console.info("SIGTERM signal received: closing queues");

	await forgotPasswordQueue.close();
	await forgotPasswordQueueScheduler.close();

	console.info("All closed");
});
