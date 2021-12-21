import { Router } from "express";
import HomepageRoute from "./homepage";

const router = Router();

router.use('/homepage', HomepageRoute)

export default router