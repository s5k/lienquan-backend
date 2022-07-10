import { find } from "lodash";

export class Container {
	private _providers: { [key: string]: any } = {};

	/**
	 * pushProvider
	 */
	public setProvider(token: string, classInstance: any) {
		this._providers[token] = classInstance;
	}

	public getProvider(token: string) {
		const matchedProvider = find(
			this._providers,
			(_provider, key) => key === token
		);

		if (matchedProvider) {
			return matchedProvider;
		} else {
			throw new Error(`No provider found for ${token}!`);
		}
	}
}

export const container = new Container();
