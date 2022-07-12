import { Request, Response, Router, Express, NextFunction } from "express";
import { container } from "tsyringe";
import {
	RequestMethod,
	RouteDefinition,
} from "../../@decorators/methods/routes.methods";

export const generateRoutes = (
	app: Express | Router | any,
	routePrefix: string,
	controllers: any[]
) => {
	controllers.forEach((controller) => {
		const instance: any = container.resolve(controller);
		const prefix = Reflect.getMetadata("prefix", controller);
		const routes: Array<RouteDefinition> = Reflect.getMetadata(
			"routes",
			controller
		);

		routes.forEach((route) => {
			const middlewaresBefore = route.middlewareBefore || [];
			const middlewaresAfter = route.middlewareAfter || [];

			app[RequestMethod[route.requestMethod]](
				routePrefix + prefix + route.path,
				...middlewaresBefore,
				(req: Request, res: Response, next: NextFunction) => {
					instance[route.methodName](req, res, next);
				},
				...middlewaresAfter
			);
		});
	});
};
