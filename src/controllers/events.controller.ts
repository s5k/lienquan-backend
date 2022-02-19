import { Request, Response } from "express"
import { successResponse } from "../helpers/methods"

export const index = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        [
            {
                id: 1,
                link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
                thumbnail: "upload/images/sukien.jpg",
                title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG" 
            },
            {
                id: 1,
                link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
                thumbnail: "upload/images/sukien.jpg",
                title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG" 
            },
            {
                id: 1,
                link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
                thumbnail: "upload/images/sukien.jpg",
                title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG" 
            },
            {
                id: 1,
                link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
                thumbnail: "upload/images/sukien.jpg",
                title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG" 
            },
        ]
    ))
}