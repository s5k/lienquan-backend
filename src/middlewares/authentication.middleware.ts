import Jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { failResponse } from "../helpers/methods";
import { UserExpress } from "../@types/express";

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        const token: string = req.headers.authorization?.split(" ")[1] || ''
        try {
            const data = await Jwt.verify(token, process.env.APP_KEY as string)
            req.user = data as UserExpress
            return next()
        } catch (error) {
            return res.status(400).send(failResponse("Thông tin tài khoản không chính xác!"))
        }
    }

    return res.status(400).send(failResponse("Không tìm thấy thông tin xác thực!"))
}

export default authenticationMiddleware