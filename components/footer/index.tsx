import { useTranslations } from "next-intl";

import FooterLinks from "./links";
import TakeActions from "./take-actions";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  return (
    <footer>
      <TakeActions
        text1={t("TakeActions.text-1")}
        text2={t("TakeActions.text-2")}
        title={t("TakeActions.discover_team")}
        btnText={t("TakeActions.btn")}
      />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
