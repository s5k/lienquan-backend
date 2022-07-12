import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("events").del();

	// Inserts seed entries
	await knex("events").insert([
		{
			id: 1,
			link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
			thumbnail: "upload/images/sukien.jpg",
			title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG",
		},
		{
			id: 2,
			link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
			thumbnail: "upload/images/sukien.jpg",
			title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG",
		},
		{
			id: 3,
			link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
			thumbnail: "upload/images/sukien.jpg",
			title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG",
		},
		{
			id: 4,
			link: "https://lienquan.garena.vn/tin-tuc/chi-tiet-ban-cap-nhat-vuong-quoc-rong",
			thumbnail: "upload/images/sukien.jpg",
			title: "CHI TIẾT BẢN CẬP NHẬT VƯƠNG QUỐC RỒNG",
		},
	]);
}
