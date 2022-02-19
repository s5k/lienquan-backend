import { object, string } from "yup";

export const loginValidator = object({
    body: object({
        username: string().required(),
        password: string().required()
    })
})