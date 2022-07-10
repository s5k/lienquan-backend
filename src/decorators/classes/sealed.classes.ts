/**
 * Use this method to prevent user modification object.
 * @param constructor
 */
export default function Sealed<T extends { new (...args: any[]): {} }>(
	constructor: T
) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}
