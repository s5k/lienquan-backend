import { Request, Response } from 'express'
import { successResponse } from '../helpers/methods'

export const index = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        [
            {
                id: 1,
                is_hot_news: true,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
            {
                id: 1,
                is_hot_news: false,
                thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                create_time: '22:00:00 - 12/12/2019',
            },
        ]
    ))
}

export const detail = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        {
            id: 1,
            author: 'Dan Pham',
            title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
            create_time: '22:00:00 - 12/12/2019',
            body: '<p>Arena of Valor International Championship (AIC) 2019, giải đấu thể thao điện tử quốc tế bộ môn Liên Quân Mobile được tổ chức bởi Garena và Tencent tại Thái Lan. Sau đây là những thông tin về lịch thi đấu, thể thức cũng như các đội tuyển tham dự AIC Liên Quân Mobile 2019.</p><p>Lịch thi đấu chung kết AIC 2019:</p><p>- 12h00: Trang giải 3 - HTVC IGP Gaming vs Hong Kong Attitude</p><p>- 16h00: Chung kết - Team Flash vs Buriam United</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/23/Esports/ck-aic-2019-ltd.jpg" data-width="915" data-height="511" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Các cặp đấu chung kết và tranh giải 3 của AIC 2019</strong></em></figcaption></figure></div><p>Lịch thi đấu bán kết AIC Liên Quân 2019:</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/18/Esports/aic-2019-ban-ket-ltd.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu bán kết và chung kết AIC 2019</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/17/Esports/aic.jpg" data-width="915" data-height="514" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Các trận đấu vòng bán kết sẽ diễn ra vào ngày 23/11, tức thứ 7 tuần sau</strong></em></figcaption></figure></div><p>Chiến thắng 4 - 2 quá tuyệt vời trước đại diện chủ nhà Thái Lan AHQ, Team Flash Liên Quân Mobile sẽ là đội tuyển thứ 2 bước vào bán kết, đối đầu với HTVC IGP Gaming - AOV Team!! Như vậy sẽ có cuộc tái hiện lại trận Chung kết ĐTDV mùa Đông 2019 trên đất Thái sau khi IGP Gaming trở thành đội tuyển đầu tiên có mặt ở vòng bán kết AIC 2019 sau chiến thắng đầy kịch tính trước USG.</p><p>Đội tuyển thứ 3 có mặt ở vòng bán kết là Buriam United. Họ đã thể hiện sức mạnh vượt trội trước EVOS Esports. Đối thủ của họ sẽ là HKA, họ đã vượt qua đội tuyển cũng ở khu vực Đài Loan là One Team bằng một chiến thắng hết sức áp đảo với tỷ số 4-0.</p><p><strong>Lịch thi đấu AIC 2019 vòng tứ kết:</strong></p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/14/Esports/aic-2019-ltd-tu-ket.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Vòng tứ kết AIC 2019 sẽ diễn ra từ ngày 14/11</strong></em></figcaption></figure></div><p>Lịch thi đấu AIC 2019 vòng đấu bảng:</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/L%E1%BB%8Bch-thi-%C4%91%E1%BA%A5u-AIC-2019-06-11.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu AIC 2019 bảng B ngày 1</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/aic-2019-a1.jpg" data-width="915" data-height="915" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu bảng A AIC2019 ngày 1</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/L%E1%BB%8Bch-thi-%C4%91%E1%BA%A5u-AIC-2019-08-11.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu AIC 2019 bảng B ngày 2</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/aic-2019-a2.jpg" data-width="915" data-height="915" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu bảng A AIC2019 ngày 2</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/L%E1%BB%8Bch-thi-%C4%91%E1%BA%A5u-AIC-2019-10-11.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu AIC 2019 bảng B ngày 3</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/aic-2019-a3.jpg" data-width="915" data-height="915" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu bảng A AIC2019 ngày 3</strong></em></figcaption></figure></div><p>Đặc biệt, lần đầu tiên trong lịch sử AIC, một giải đấu 1v1 sẽ được tổ chức để các siêu sao hàng đầu thế giới trình diễn kỹ năng cá nhân thượng thừa. Mỗi đội tuyển sẽ chọn 1 tuyển thủ tham dự giải 1v1 từ ngày 05/11 tới 10/11 với lịch trình như sau:</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/L%E1%BB%8Bch-thi-%C4%91%E1%BA%A5u-gi%E1%BA%A3i-1v1-06-11.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Còn ngày 06/11 sẽ diễn ra các trận đấu thuộc bảng B1 và B2</strong></em></figcaption></figure></div><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/aic-2019-solo.jpg" data-width="915" data-height="915" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Còn ngày 06/11 sẽ diễn ra các trận đấu thuộc bảng A1 và A2</strong></em></figcaption></figure></div><p></p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/11/05/Esports/L%E1%BB%8Bch-1v1-Knock-out.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Lịch thi đấu 1v1 vòng Playoff</strong></em></figcaption></figure></div><p>Cập nhật kết quả bốc thăm chia bảng AIC Liên Quân Mobile 2019:</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/10/12/Esports/image%20(23).jpg" data-width="915" data-height="512" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Cả 2 đội tuyển của Việt Nam đều sẽ gặp nhiều khó khăn ở vòng bảng AIC 2019</strong></em></figcaption></figure></div><p>- Lịch thi đấu AIC Liên Quân Mobile 2019:</p><p>AIC 2019 sẽ diễn ra vào cuối tháng 11 năm 2019. Lịch thi đấu chi tiết của giải sẽ được cập nhật sau khi giải đấu Đấu Trường Danh Vọng Mùa Đông kết thúc. Nhà vô địch và Á quân của Đấu Trường Danh Vọng Mùa Đông 2019 sẽ là 2 đại diện của Việt Nam tham dự AIC 2019.</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/09/16/Esports/dau-truong-danh-vong-mua-dong-2019.jpg" data-width="600" data-height="400" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>2 đội tuyển có thành tích cao nhất của ĐTDV Mùa Đông sẽ tham dự AIC 2019</strong></em></figcaption></figure></div><p>- Danh sách đội tuyển tham dự AIC 2019 (Đang cập nhật)</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/10/14/Esports/aic-2019-teams.jpg" data-width="915" data-height="468" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>12 đội tuyển tại AIC 2019</strong></em></figcaption></figure></div><p>- Thể thức thi đấu</p><p>Luật cấm - chọn quốc tế sẽ tiếp tục được áp dụng tại AIC 2019 để các đội tuyển đa dạng hóa lượng tướng và chiến thuật, qua đó đem tới cho người xem những trận đấu kịch tính và tuyệt vời nhất. Luật thi đấu này yêu cầu “mỗi đội không được phép chọn tướng mà mình đã sử dụng ở những ván đấu trước đó (nếu chọn tướng của đội đối thủ ở ván đấu trước hoặc bước sang ván đấu thứ 7 thì không bị ảnh hưởng bởi luật này)”</p><p>- Tổng giá trị giải thưởng của giải đấu:</p><div style="text-align:center"><figure class="image" style="display:inline-block"><img class="art-one-img" src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/09/16/Esports/aic-2019-giai-thuong.jpg" data-width="915" data-height="515" alt="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?" title="Lịch thi đấu AIC 2019 Liên quân Mobile: Việt Nam vô địch?"><figcaption><em><strong>Tổng giá trị giải thưởng của AIC 2019 lên đến 12 tỷ đồng</strong></em></figcaption></figure></div><p>Tại AIC 2018, Team Flash kết thúc hành trình của mình với ngôi vị Á Quân sau những màn thể hiện đầy phong độ và quả cảm. Nhưng sau một kỳ AWC 2019 đầy thành công, đại diện của Việt Nam chắc chắn sẽ là ứng cử viên số 1 tại AIC 2019. Liệu các tuyển thủ của Việt Nam có thể vươn tới chức vô địch để khép lại một năm thành công của Liên Quân Mobile Việt Nam? Hãy cùng đón xem AIC Liên Quân Mobile 2019. vào tháng 11 tới.</p>',
            related_posts: [
                {
                    id: 1,
                    is_hot_news: false,
                    thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                    title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                    description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                    create_time: '22:00:00 - 12/12/2019',
                },
                {
                    id: 1,
                    is_hot_news: false,
                    thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                    title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                    description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                    create_time: '22:00:00 - 12/12/2019',
                },
                {
                    id: 1,
                    is_hot_news: false,
                    thumbnail: 'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png',
                    title: 'Giải đấu AIC 2019 chính thức bắt đầu.',
                    description: 'Giải đấu sẽ quy tụ nhiêu nhân tài tham gia, cùng đón xem...',
                    create_time: '22:00:00 - 12/12/2019',
                },
            ],
        }
    ))
}