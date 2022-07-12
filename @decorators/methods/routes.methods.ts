export enum RequestMethod {
	"get",
	"post",
	"delete",
	"options",
	"put",
	"patch",
}

export interface RouteDefinition {
	// Path to our route
	path: string;
	// HTTP Request method (get, post, ...)
	requestMethod: RequestMethod;
	// Method name within our class responsible for this route
	methodName: string;
	middlewareBefore?: Function[];
	middlewareAfter?: Function[];
}

export interface MiddlewareDefinition {
	before?: Function[];
	after?: Function[];
}

function generateMethods(
	path: string,
	middlewares: MiddlewareDefinition,
	target: any,
	propertyKey: string,
	httpMethod: RequestMethod
) {
	// In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
	// To prevent any further validation simply set it to an empty array here.
	if (!Reflect.hasMetadata("routes", target.constructor)) {
		Reflect.defineMetadata("routes", [], target.constructor);
	}

	// Get the routes stored so far, extend it by the new route and re-set the metadata.
	const routes = Reflect.getMetadata(
		"routes",
		target.constructor
	) as Array<RouteDefinition>;

	routes.push({
		requestMethod: httpMethod,
		path,
		methodName: propertyKey,
		middlewareBefore: middlewares.before,
		middlewareAfter: middlewares.after,
	});
	Reflect.defineMetadata("routes", routes, target.constructor);
}

export const Get = (
	path: string,
	middlewares: MiddlewareDefinition = { before: [], after: [] }
) => {
	// `target` equals our class, `propertyKey` equals our decorated method name
	return (target: any, propertyKey: string): void => {
		generateMethods(path, middlewares, target, propertyKey, RequestMethod.get);
	};
};

export const Post = (
	path: string,
	middlewares: MiddlewareDefinition = { before: [], after: [] }
) => {
	return (target: any, propertyKey: string): void => {
		generateMethods(path, middlewares, target, propertyKey, RequestMethod.post);
	};
};

export const Put = (
	path: string,
	middlewares: MiddlewareDefinition = { before: [], after: [] }
) => {
	return (target: any, propertyKey: string): void => {
		generateMethods(path, middlewares, target, propertyKey, RequestMethod.put);
	};
};

export const Patch = (
	path: string,
	middlewares: MiddlewareDefinition = { before: [], after: [] }
) => {
	return (target: any, propertyKey: string): void => {
		generateMethods(
			path,
			middlewares,
			target,
			propertyKey,
			RequestMethod.patch
		);
	};
};

export const Delete = (
	path: string,
	middlewares: MiddlewareDefinition = { before: [], after: [] }
) => {
	return (target: any, propertyKey: string): void => {
		generateMethods(
			path,
			middlewares,
			target,
			propertyKey,
			RequestMethod.delete
		);
	};
};
