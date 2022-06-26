import Bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await db()
                        .select(['full_name', 'email', 'username', 'password', 'created_at', 'updated_at'])
                        .from('users')
                        .where('username', req.body.username)
                        .limit(1)
                        .first()
        
        const isPasswordCorrect = await Bcrypt.compare(req.body.password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Mật khẩu không đúng!");
        }

        delete user.password

        res.send(successResponse({
            token: await Jwt.sign(user, process.env.APP_KEY as string)
        }))
    } catch (error) {
            console.log(error);
            
            res.status(400).send(failResponse("Tài khoản hoặc mật khẩu không đúng!"))
    }
}
