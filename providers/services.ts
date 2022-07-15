import { container, Lifecycle } from "tsyringe";
import AuthenticateService from "../src/services/AuthenticateService/Authenticate.service";
import EventsService from "../src/services/EventsService/Events.service";
import HomePageService from "../src/services/HomePageService/HomePage.service";
import MediaService from "../src/services/MediaService/Events.service";
import NewsService from "../src/services/NewsService/News.service";
import PrizeService from "../src/services/PrizeService/Prize.service";
import TeamsService from "../src/services/TeamsService/Teams.service";
import UploadFileService from "../src/services/UploadFileService/UploadFile.service";

container.register(
	`InterfaceHomePageService`,
	{ useClass: HomePageService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceAuthenticateService`,
	{ useClass: AuthenticateService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceEventsService`,
	{ useClass: EventsService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceMediaService`,
	{ useClass: MediaService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceNewsService`,
	{ useClass: NewsService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfacePrizeService`,
	{ useClass: PrizeService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceTeamsService`,
	{ useClass: TeamsService },
	{ lifecycle: Lifecycle.Singleton }
);

container.register(
	`InterfaceUploadFileService`,
	{ useClass: UploadFileService },
	{ lifecycle: Lifecycle.Singleton }
);
