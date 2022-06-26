import { Request, Response } from 'express'
import { db } from '../../config/knex'
import { successResponse } from '../helpers/methods'

export const index = async (req: Request, res: Response): Promise<void> => {
    const listNews = await db().table('news')
        .select(['id', 'is_hot_news', 'thumbnail', 'title', 'description', 'create_time'])
        .orderBy('id', 'desc')

    res.send(successResponse(
        listNews
    ))
}

export const detail = async (req: Request, res: Response): Promise<void> => {
    const post: any = await db().table('news')
        .join('users', 'news.user_id', '=', 'users.id')
        .select(['news.*', 'users.full_name as author'])
        .where('news.id', req.params.id)
        .first()
    const related_posts: any = await db().table('news')
        .select(['id', 'is_hot_news', 'thumbnail', 'title', 'description', 'create_time'])
        .limit(3)
        .orderBy('id', 'desc')
        .whereNot('id', req.params.id)
        
    res.send(successResponse(
        Object.assign(post, {
            related_posts,
        })
    ))
}