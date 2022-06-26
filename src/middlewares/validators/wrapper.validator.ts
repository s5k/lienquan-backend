import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";
import * as methods from "../../helpers/methods";

export const validate =
	(schema: AnyObjectSchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			return next();
		} catch (err) {
			console.log(err);

			return res.status(419).json(
				// @ts-ignore
				methods.failResponse("Validation failed", [err.message])
			);
		}
	};
