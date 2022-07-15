import BaseModel from "../models/base.model";
import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "./InterfaceBase.service";

export default abstract class BaseService implements InterfaceBaseService {
	protected abstract model?: BaseModel;

	create(
		data: Record<string, any>
	): Promise<responseSuccessType | responseFailType> {
		if (!this.model) throw new Error("Chưa khởi tạo Model cho service!");

		return this.model
			?.create(data)
			.then(() => this.successResponse([]))
			.catch(() => this.failResponse("Tạo thất bại!"));
	}

	update(
		data: Record<string, any>,
		whereData: Record<string, any>
	): Promise<responseSuccessType | responseFailType> {
		if (!this.model) throw new Error("Chưa khởi tạo Model cho service!");

		return this.model
			?.update(data, whereData)
			.then(() => this.successResponse([]))
			.catch(() => this.failResponse("Tạo thất bại!"));
	}

	destroy(
		data: Record<string, any>
	): Promise<responseSuccessType | responseFailType> {
		if (!this.model) throw new Error("Chưa khởi tạo Model cho service!");

		return this.model
			?.destroy(data)
			.then(() => this.successResponse([]))
			.catch(() => this.failResponse("Tạo thất bại!"));
	}

	successResponse(payload: Record<string, any>): responseSuccessType {
		return {
			status: true,
			data: payload,
		};
	}

	failResponse(message: string): responseFailType {
		return {
			status: false,
			message,
		};
	}
}
