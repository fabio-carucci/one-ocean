import { routing } from "@/i18n/routing";

// Crea un tipo che rappresenta tutte le chiavi di `routing.pathnames`
type PathnameKey = keyof typeof routing.pathnames;

const ROUTES: Record<string, PathnameKey> = {
  HOME: "/",
  ABOUT: "/chi-siamo",
  BLUE_ECONOMY: "/blue-economy",
  OUR_APPROACH: "/il-nostro-approccio",
  PROJECTS: "/progetti",
  RESOURCES: "/risorse",
  EVENTS: "/i-nostri-eventi",
  TAKE_ACTIONS: "/contribuisci",
  MISSION: "/missione",
  AMBASSADORS: "/ambasciatori",
  PARTNER: "/partner",
  FOR_SCHOOLS: "/per-le-scuole",
  NEWS: "/notizie",
  CONTACT_US: "/contattaci",
  NEWSLETTER: "/newsletter",
};

export default ROUTES;
