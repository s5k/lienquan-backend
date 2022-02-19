import { object, string } from "yup";

export const loginValidator = object({
    body: object({
        username: string().required('Vui lòng nhập tài khoản!'),
        password: string().required('Vui lòng nhập mật khẩu').min(5, 'Vui lòng nhập mật khẩu từ 5 ký tự!')
    })
})