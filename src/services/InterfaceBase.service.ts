export interface responseSuccessType {
	status: boolean;
	data?: Record<string, any>;
}

export interface responseFailType {
	status: boolean;
	message?: string;
}

export default interface InterfaceBaseService {
	successResponse(payload: Record<string, any>): responseSuccessType;

	failResponse(message: string): responseFailType;

	create(
		data: Record<string, any>
	): Promise<responseSuccessType | responseFailType>;

	update(
		data: Record<string, any>,
		whereData: Record<string, any>
	): Promise<responseSuccessType | responseFailType>;

	destroy(
		data: Record<string, any>
	): Promise<responseSuccessType | responseFailType>;
}
