import { Request } from "express"

interface UserExpress {
    full_name: string
    email: string
    username: string
    created_at: string
    updated_at: string
}

declare global {
    namespace Express {
        interface Request {
            user?: UserExpress
        }
    }
}