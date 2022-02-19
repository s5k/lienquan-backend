import { Request, Response } from 'express'
import { successResponse } from '../helpers/methods'

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        {
            data: 'here comes you payload...'
        }
    ))
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const indexPost = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        {
            data: 'here comes you payload...',
            request: req.body,
        }
    ))
}