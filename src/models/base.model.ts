import _ from "lodash";
import { db } from "../../config/knex";

enum PrepareTypeEnum {
	CREATE_NEW,
	UPDATE,
}

export default abstract class BaseModel {
	protected abstract tableName: string;

	protected abstract fillable: string[];

	protected prepareFields(data: any, type: PrepareTypeEnum | null = null) {
		if (Array.isArray(data)) {
			data = data.map((row) => {
				if (
					type === PrepareTypeEnum.CREATE_NEW &&
					this.fillable.indexOf("created_at") > -1
				) {
					row.created_at = new Date()
						.toISOString()
						.slice(0, 19)
						.replace("T", " ");
				} else if (
					type === PrepareTypeEnum.UPDATE &&
					this.fillable.indexOf("updated_at") > -1
				) {
					row.updated_at = new Date()
						.toISOString()
						.slice(0, 19)
						.replace("T", " ");
				}

				return _.pick(row, this.fillable);
			});
		}

		if (typeof data === "object" && !Array.isArray(data)) {
			data = _.pick(data, this.fillable);

			if (
				type === PrepareTypeEnum.CREATE_NEW &&
				this.fillable.indexOf("created_at") > -1
			) {
				data.created_at = new Date()
					.toISOString()
					.slice(0, 19)
					.replace("T", " ");
			} else if (
				type === PrepareTypeEnum.UPDATE &&
				this.fillable.indexOf("updated_at") > -1
			) {
				data.updated_at = new Date()
					.toISOString()
					.slice(0, 19)
					.replace("T", " ");
			}
		}

		return data;
	}

	/**
	 * getQueryBuilder
	 */
	public getQueryBuilder() {
		return db();
	}

	/**
	 * create
	 */
	public create(data: any): Promise<void> {
		return db().table(this.tableName).insert(this.prepareFields(data));
	}

	/**
	 * find
	 */
	public find(
		select: any,
		whereData: any,
		limit: number,
		sortBy: string,
		sortType: string
	): Promise<any[]> {
		return db()
			.table(this.tableName)
			.select(select)
			.where(whereData)
			.limit(limit)
			.orderBy(sortBy, sortType);
	}

	/**
	 * update
	 */
	public update(data: any, whereData: any): Promise<number> {
		return db()
			.table(this.tableName)
			.where(whereData)
			.update(this.prepareFields(data));
	}

	/**
	 * destroy
	 */
	public destroy(whereData: any): Promise<void> {
		return db().table(this.tableName).where(whereData).del();
	}
}
