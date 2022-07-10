import { container } from "../../instances/container";

export function Inject(token: string) {
	return function (target: any, key: string) {
		Object.defineProperty(target, key, {
			get: () => container.getProvider(token),
			enumerable: true,
			configurable: true,
		});
	};
}
