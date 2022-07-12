import { container, injectable } from "tsyringe";

export default function Controller(prefix: string = ""): Function {
	return <T extends { new (...args: any[]): {} }>(target: T): void => {
		Reflect.defineMetadata("prefix", prefix, target);

		if (!Reflect.hasMetadata("routes", target)) {
			Reflect.defineMetadata("routes", [], target);
		}

		injectable()(target);
		container.registerSingleton(target);
	};
}
