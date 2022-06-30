import type { ErrorRequestHandler } from "express";
import { config } from "../../config/environment";
import * as methods from "../helpers/methods";

/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const errorMiddleware: ErrorRequestHandler = (
	error,
	req,
	res,
	next
): Record<string, any> => {
	return res
		.status(Number(config.EXCEPTION_CODE))
		.send(methods.failResponse(error.message));
};

export default errorMiddleware;
