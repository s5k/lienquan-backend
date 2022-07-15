import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceEventsService extends InterfaceBaseService {
	index(): Promise<responseSuccessType | responseFailType>;
}
