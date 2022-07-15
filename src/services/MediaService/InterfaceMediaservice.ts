import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceMediaService extends InterfaceBaseService {
	index(): Promise<responseSuccessType | responseFailType>;
}
