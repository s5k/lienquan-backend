import { Request, Response } from 'express'
import { successResponse } from '../helpers/methods'

export const index = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        {
            logo_src: 'upload/images/cup-aic.png',
            introduce_text: 'Arena of Valor International Championship (AIC) 2019, giải đấu thể thao điện tử quốc tế bộ môn Liên Quân Mobile được tổ chức bởi Garena và Tencent sẽ diễn ra tại Thái Lan từ 05/11 tới 24/11 với tổng giải thưởng gần 12 tỷ đồng. 12 đội tuyển tới từ 9 khu vực hàng đầu trên thế giới sẽ cùng nhau tranh tài tại một trong những giải eSports quốc tế có số tiền thưởng lớn nhất thế giới ở thể loại MOBA trên nền tảng di động. Đặc biệt lần đầu tiên trong lịch sử AIC, giải đấu 1v1 sẽ được tổ chức để các siêu sao hàng đầu thế giới trình diễn kỹ năng cá nhân thượng thừa.',
            watch_now_url: 'https://lienquan.garena.vn/'
        }
    ))
}