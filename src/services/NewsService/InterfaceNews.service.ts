import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceNewsService extends InterfaceBaseService {
	index(): Promise<responseSuccessType | responseFailType>;

	detail(id: number): Promise<responseSuccessType | responseFailType>;
}
