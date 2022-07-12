import { Request, Response } from "express";
import { failResponse, successResponse } from "../helpers/methods";
import BaseModel from "../models/base.model";

export default abstract class BaseController {
	protected model?: BaseModel;

	/**
	 * index
	 */
	public index(req: Request, res: Response) {
		res.send(successResponse([]));
	}

	/**
	 * create
	 */
	public async create(req: Request, res: Response) {
		try {
			await this.model?.create(req.body);

			res.status(201).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể tạo mới!"));
		}
	}

	/**
	 * update
	 */
	public async update(req: Request, res: Response) {
		try {
			await this.model?.update(req.body, { id: req.params.id });

			res.status(202).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể cập nhật!"));
		}
	}

	/**
	 * destroy
	 */
	public async destroy(req: Request, res: Response) {
		try {
			await this.model?.destroy({ id: req.params.id });

			res.status(204).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể xóa!"));
		}
	}
}
