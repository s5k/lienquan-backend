import { Router } from "express";
import HomepageRoute from "./homepage";
import NewsRoute from "./news";
import EventsRoute from "./events";
import TeamsRoute from "./teams";
import AuthRoute from "./authentication";
import PrizeRoute from "./prize";

const router = Router();
router.use("/auth", AuthRoute);
router.use("/homepage", HomepageRoute);
router.use("/news", NewsRoute);
router.use("/events", EventsRoute);
router.use("/teams", TeamsRoute);
router.use("/prize", PrizeRoute);

export default router;
