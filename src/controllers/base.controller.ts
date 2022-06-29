import { Request, Response } from "express";
import { failResponse, successResponse } from "../helpers/methods";
import BaseModel from "../models/base.model";

export default class BaseController {
	protected model: BaseModel;

	constructor(model: BaseModel) {
		this.model = model;
	}

	/**
	 * index
	 */
	public index(req: Request, res: Response) {
		res.send(successResponse([]));
	}

	/**
	 * create
	 */
	create = async (req: Request, res: Response) => {
		try {
			await this.model.create(req.body);

			res.status(201).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể tạo mới!"));
		}
	};

	/**
	 * update
	 */
	update = async (req: Request, res: Response) => {
		try {
			await this.model.update(req.body, { id: req.params.id });

			res.status(202).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể cập nhật!"));
		}
	};

	/**
	 * destroy
	 */
	destroy = async (req: Request, res: Response) => {
		try {
			await this.model.destroy({ id: req.params.id });

			res.status(204).send(successResponse([]));
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể xóa!"));
		}
	};
}
