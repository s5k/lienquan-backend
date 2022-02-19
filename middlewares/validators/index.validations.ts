import * as Yup from "yup";

export const indexValidator = Yup.object({
    body: Yup.object({
        key: Yup.string().required('key is required')
    })
})