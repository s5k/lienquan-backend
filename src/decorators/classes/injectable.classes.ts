import { container } from "../../instances/container";

export function Injectable(token: string, args: any[] = []): Function {
	return function <T extends { new (...args: any[]): {} }>(target: T): void {
		container.setProvider(token, new target(...args));
	};
}
