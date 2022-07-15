import { Request, Response } from "express";
import { failResponse, successResponse } from "../helpers/methods";
import InterfaceBaseService from "../services/InterfaceBase.service";

export default abstract class BaseController {
	protected service?: InterfaceBaseService;

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
			const response = await this.service?.create(req.body);

			if (response?.status) {
				res.status(201).send(response);
			} else {
				res.status(400).send(response);
			}
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
			const response = await this.service?.update(req.body, {
				id: req.params.id,
			});

			if (response?.status) {
				res.status(201).send(response);
			} else {
				res.status(400).send(response);
			}
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
			const response = await this.service?.destroy({
				id: req.params.id,
			});

			if (response?.status) {
				res.status(201).send(response);
			} else {
				res.status(400).send(response);
			}
		} catch (error) {
			console.error(error);
			res.status(400).send(failResponse("Không thể xóa!"));
		}
	}
}
