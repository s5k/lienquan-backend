import { Request, Response } from "express";
import { successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response):Promise<void> => {
    res.send(successResponse(
        [
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam. Its Arena of Valor team was the runner-up of the 2018 AOV International Championship,[1] champions of the 2019 AOV World Cup[2] and 2019 AOV International Championship, and four-time winners of the regional Arena of Glory. Its FIFA Online 4 team is a two-time winner of the prestigious EA Champions Cup (EACC),[3][4] and its League of Legends team competes in the Vietnam Championship Series (VCS), the top-level league for the game in the country.',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    },
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
            {
                logo: 'upload/images/flashlogo.png',
                name: 'FLASH',
                region: 'VN',
                description: 'The Flash from Vietnam',
                video_link: '',
                code: 'FLC',
                players: [
                    {
                        position: 1,
                        image: 'upload/images/gau-avatar.png',
                        lane: 'mid',
                        name: 'GauBaki',
                    }
                ]
            },
        ]
    ))
}