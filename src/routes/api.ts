import { Router } from "express";
import HomepageRoute from "./homepage";
import NewsRoute from "./news";
import EventsRoute from "./events";
import TeamsRoute from "./teams";

const router = Router();

router.use('/homepage', HomepageRoute)
router.use('/news', NewsRoute)
router.use('/events', EventsRoute)
router.use('/teams', TeamsRoute)

export default router