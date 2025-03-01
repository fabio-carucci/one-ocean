import Image from "next/image";
import { useTranslations } from "next-intl";

import Links from "./LinksContainer";
import Social from "./Social";

const FooterLinks = () => {
  const t = useTranslations("Footer");
  return (
    <section className="flex flex-col justify-center gap-[32px] bg-oof-blue-900 pt-[108px]">
      <div className="mx-8 flex items-center justify-between">
        <Image
          src="/logos/Logo_Verticale.png"
          alt="One Ocean logo"
          width={195}
          height={78}
        />
        <Social />
      </div>

      <Links />

      <div className="mx-8 border-t border-oof-blue px-8 py-6 text-center text-[13px] leading-[15.6px] text-oof-blue-50">
        {t("info")}
      </div>
    </section>
  );
};

export default FooterLinks;
