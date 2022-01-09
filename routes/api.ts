import { Router } from "express";
import HomepageRoute from "./homepage";
import NewsRoute from "./news";

const router = Router();

router.use('/homepage', HomepageRoute)
router.use('/news', NewsRoute)

export default router