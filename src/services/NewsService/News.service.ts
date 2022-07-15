import { singleton } from "tsyringe";
import NewsModel from "../../models/news.model";
import SettingsModel from "../../models/settings.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceNewsService from "./InterfaceNews.service";

@singleton()
export default class NewsService
	extends BaseService
	implements InterfaceNewsService
{
	constructor(protected model: NewsModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		try {
			const listNews = await this.model
				.getQueryBuilder()
				.table("news")
				.select([
					"id",
					"is_hot_news",
					"thumbnail",
					"title",
					"description",
					"created_at",
				])
				.orderBy("id", "desc");

			return this.successResponse(listNews);
		} catch (error) {
			return this.failResponse("Không thể tải dữ liệu!");
		}
	}

	public async detail(
		id: number
	): Promise<responseSuccessType | responseFailType> {
		try {
			const post: any = await this.model
				.getQueryBuilder()
				.table("news")
				.join("users", "news.user_id", "=", "users.id")
				.select(["news.*", "users.full_name as author"])
				.where("news.id", id)
				.first();
			const related_posts: any = await this.model
				.getQueryBuilder()
				.table("news")
				.select([
					"id",
					"is_hot_news",
					"thumbnail",
					"title",
					"description",
					"created_at",
				])
				.limit(3)
				.orderBy("id", "desc")
				.whereNot("id", id);

			return this.successResponse(
				Object.assign(post, {
					related_posts,
				})
			);
		} catch (error) {
			return this.failResponse("Không thể tìm thấy bài đăng!");
		}
	}
}
