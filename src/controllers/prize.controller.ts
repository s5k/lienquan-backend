import { Request, Response } from "express";
import { db } from "../../config/knex";
import { SettingInterface } from "../@types/settings";
import { failResponse, successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response): Promise<void> => {
	const data: any = {};
	const rows = await db()
		.table("settings")
		.select("key", "value")
		.whereIn("key", ["prize_image", "prize_image_mobile"]);

	for (const row of rows) {
		data[row.key] = row.value;
	}

	res.send(successResponse(data));
};


export const update = async (req: Request, res: Response): Promise<void> => {
	try {
        const listData: SettingInterface[] = req.body.data;
        const executeSqls = [];

        for (const data of listData) {
            executeSqls.push(db().table("settings").update({value: data.value}).where({ key: data.key}))
        }

        await Promise.all(executeSqls);

        res.send(successResponse([]))
    } catch (error) {
        console.log(error);
        
        res.status(400).send(failResponse("Không thể cập nhật!"))
    }
};
