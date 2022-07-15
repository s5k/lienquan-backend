import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceTeamsService extends InterfaceBaseService {
	index(): Promise<responseSuccessType | responseFailType>;
}
