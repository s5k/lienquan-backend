import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfacePrizeService extends InterfaceBaseService {
	index(): Promise<responseSuccessType | responseFailType>;

	update(
		listSettings: Record<string, any>
	): Promise<responseSuccessType | responseFailType>;
}
