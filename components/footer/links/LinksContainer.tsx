import Link from "next/link";
import { useTranslations } from "next-intl";

import ROUTES from "@/constants/routes";

const LinksItem = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <h6 className="font-raleway text-[25px] leading-[30px] text-oof-blue-200">
        {title}
      </h6>
      <div className="flex flex-col gap-[4px]">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className="text-[16px] leading-[24px] text-oof-blue-50"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const LinksContainer: React.FC = () => {
  const t = useTranslations("Footer.FooterLinks");

  const footerLinksData = [
    {
      title: t("Foundation.title"),
      links: [
        { text: t("Foundation.about_us"), href: ROUTES.ABOUT },
        { text: t("Foundation.mission"), href: ROUTES.MISSION },
        { text: t("Foundation.our_partners"), href: ROUTES.PARTNER },
        { text: t("Foundation.ambassadors"), href: ROUTES.AMBASSADORS },
        { text: t("Foundation.take_actions"), href: ROUTES.TAKE_ACTIONS },
      ],
    },
    {
      title: t("What_we_do.title"),
      links: [
        { text: t("What_we_do.blue_economy"), href: ROUTES.BLUE_ECONOMY },
        { text: t("What_we_do.our_approach"), href: ROUTES.OUR_APPROACH },
        { text: t("What_we_do.awareness"), href: ROUTES.AWARENESS },
        { text: t("What_we_do.impact_area"), href: ROUTES.IMPACT_AREA },
        { text: t("What_we_do.projects"), href: ROUTES.PROJECTS },
      ],
    },
    {
      title: t("Discover_more.title"),
      links: [
        { text: t("Discover_more.resources"), href: ROUTES.RESOURCES },
        { text: t("Discover_more.events"), href: ROUTES.EVENTS },
        { text: t("Discover_more.news"), href: ROUTES.NEWS },
        { text: t("Discover_more.for_schools"), href: ROUTES.FOR_SCHOOLS },
        { text: t("Discover_more.contact_us"), href: ROUTES.CONTACT_US },
      ],
    },
    {
      title: t("Other.title"),
      links: [
        { text: t("Other.privacy_policy"), href: ROUTES.PRIVACY_POLICY },
        { text: t("Other.cookie_policy"), href: ROUTES.COOKIE_POLICY },
        { text: t("Other.preferences"), href: ROUTES.PRIVACY_PREFERENCES },
      ],
    },
  ];

  return (
    <div className="flex justify-between gap-[24px] px-8 py-16">
      {footerLinksData.map((footerLink, index) => (
        <LinksItem
          key={index}
          title={footerLink.title}
          links={footerLink.links}
        />
      ))}
    </div>
  );
};

export default LinksContainer;
