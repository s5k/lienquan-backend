import { Request } from "express";

interface UserExpress {
	id: number;
	full_name: string;
	email: string;
	username: string;
	created_at: string;
	updated_at: string;
	iat?: number;
	exp?: number;
}

declare global {
	namespace Express {
		interface Request {
			user?: UserExpress;
		}
	}
}
