import { Pathname } from "@/i18n/routing";

import ROUTES from "./routes";

interface NavigationLinks {
  route: Pathname;
  label: string;
}

// "label" è la chiave corrispondente nei file di traduzione
// usare t = useTranslation() per la traduzione dinamica

export const navLinks: NavigationLinks[] = [
  {
    route: ROUTES.ABOUT,
    label: "about_us", // Chiave per la traduzione
  },
  {
    route: ROUTES.BLUE_ECONOMY,
    label: "blue_economy",
  },
  {
    route: ROUTES.OUR_APPROACH,
    label: "our_approach",
  },
  {
    route: ROUTES.PROJECTS,
    label: "projects",
  },
  {
    route: ROUTES.RESOURCES,
    label: "resources",
  },
  {
    route: ROUTES.EVENTS,
    label: "events",
  },
  {
    route: ROUTES.TAKE_ACTIONS,
    label: "take_actions",
  },
];

export const hamburgerLinks: NavigationLinks[] = [
  {
    route: ROUTES.MISSION,
    label: "mission",
  },
  {
    route: ROUTES.AMBASSADORS,
    label: "ambassadors",
  },
  {
    route: ROUTES.PARTNER,
    label: "partner",
  },
  {
    route: ROUTES.FOR_SCHOOLS,
    label: "for_schools",
  },
  {
    route: ROUTES.NEWS,
    label: "news",
  },
  {
    route: ROUTES.CONTACT_US,
    label: "contact_us",
  },
  {
    route: ROUTES.NEWSLETTER,
    label: "newsletter",
  },
  {
    route: ROUTES.TAKE_ACTIONS,
    label: "take_actions",
  },
];
