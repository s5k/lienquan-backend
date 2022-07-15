require("dotenv").config();
import "reflect-metadata";
import { rateLimit } from "express-rate-limit";
import errorMiddleware from "./src/middlewares/error.middleware";
import express from "express";
import cors from "cors";
import processFileUpload from "express-fileupload";
import { generateRoutes } from "./src/helpers/routes";
import "./src/queues/workers";
import "./providers";

import HomepageController from "./src/controllers/homepage.controller";
import EventsController from "./src/controllers/events.controller";
import AuthenticationController from "./src/controllers/authentication.controller";
import MediaController from "./src/controllers/media.controller";
import NewsController from "./src/controllers/news.controller";
import PrizeController from "./src/controllers/prize.controller";
import TeamsController from "./src/controllers/teams.controller";
import UploadFileController from "./src/controllers/uploadFile.controller";

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Quá nhiều lượt truy cập từ IP này, vui lòng thử lại sau!",
});

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

generateRoutes(app.use(limiter, processFileUpload()), "/api/v1/", [
	AuthenticationController,
	EventsController,
	HomepageController,
	MediaController,
	NewsController,
	PrizeController,
	TeamsController,
	TeamsController,
	UploadFileController,
]);

// Error Handler Middleware
app.use(errorMiddleware);

export default app;
