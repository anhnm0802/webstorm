import { Trans, withTranslation } from "react-i18next";

const CustomTrans = ({ children }: { children: string }) => {
  return <Trans>{children}</Trans>;
};

export default withTranslation()(CustomTrans);
