import { body, ValidationChain } from "express-validator";

export const loginValidator: ValidationChain[] = [
    body('username').
        exists().
        isLength({min: 5}),
    body('password').isLength({min: 5})
]