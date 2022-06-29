require("dotenv").config();
import { rateLimit } from "express-rate-limit";
import errorMiddleware from "./src/middlewares/error.middleware";

import express from "express";
import cors from "cors";
import apiRoutes from "./src/routes/api";

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Quá nhiều lượt truy cập từ IP này, vui lòng thử lại sau!",
});

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api/v1", limiter, apiRoutes);

// Error Handler Middleware
app.use(errorMiddleware);

export default app;
