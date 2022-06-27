import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("settings").del();

	// Inserts seed entries
	await knex("settings").insert([
		{ key: "logo_src", value: "upload/images/cup-aic.png" },
		{
			key: "introduce_text",
			value:
				"Arena of Valor International Championship (AIC) 2019, giải đấu thể thao điện tử quốc tế bộ môn Liên Quân Mobile được tổ chức bởi Garena và Tencent sẽ diễn ra tại Thái Lan từ 05/11 tới 24/11 với tổng giải thưởng gần 12 tỷ đồng. 12 đội tuyển tới từ 9 khu vực hàng đầu trên thế giới sẽ cùng nhau tranh tài tại một trong những giải eSports quốc tế có số tiền thưởng lớn nhất thế giới ở thể loại MOBA trên nền tảng di động. Đặc biệt lần đầu tiên trong lịch sử AIC, giải đấu 1v1 sẽ được tổ chức để các siêu sao hàng đầu thế giới trình diễn kỹ năng cá nhân thượng thừa.",
		},
		{ key: "watch_now_url", value: "https://lienquan.garena.vn/" },
		{ key: "prize_image", value: "upload/images/prize_image.png" },
		{ key: "prize_image_mobile", value: "upload/images/prize_image_mo.png" },
	]);
}
