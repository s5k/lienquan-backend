import IORedis from "ioredis";
import { now } from "lodash";
import { redisConfig } from "../../config/redis";

interface UseCacheOpts {
	ttl?: number;
}

const redisInstance = new IORedis(redisConfig);

/**
 * Memorize the responsed
 * @param opts UseCacheOpts
 * @returns any
 */
export default function useCache(opts: UseCacheOpts = {}) {
	return function (
		target: Object,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;

		descriptor.value = async function (...args: []) {
			const cacheKey = `caches:response:__cacheKey__${
				target.constructor.name
			}__${propertyKey}__${args.toString()}`;
			const cacheData = await redisInstance.hgetall(cacheKey);

			if (
				Object.keys(cacheData).length === 0 ||
				(parseInt(cacheData.ttl) !== 0 && parseInt(cacheData.ttl) < now())
			) {
				const applyMethod = await originalMethod.apply(this, args);

				await redisInstance.hmset(cacheKey, {
					ttl: opts.ttl ? now() + opts.ttl : 0,
					value: JSON.stringify(applyMethod),
				});

				return applyMethod;
			} else {
				return JSON.parse(cacheData.value);
			}
		};
	};
}
