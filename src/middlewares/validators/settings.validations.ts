import { array, object, string } from "yup";

export const settingsValidator = object({
    body: object({
        data: array()
            .required().
            of(
                object({
                    key: string().required(),
                    value: string().required()
                })
            )
    })
})