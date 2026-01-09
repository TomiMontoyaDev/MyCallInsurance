import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-[#013b5a] py-20 px-6 mt-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          {t("privacy.title")}
        </h1>

        <p className="text-center text-gray-600 mb-12">
          {t("privacy.lastUpdated")}
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>{t("privacy.intro")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.collectTitle")}</h2>
          <p>{t("privacy.collectText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.useTitle")}</h2>
          <p>{t("privacy.useText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.shareTitle")}</h2>
          <p>{t("privacy.shareText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.cookiesTitle")}</h2>
          <p>{t("privacy.cookiesText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.securityTitle")}</h2>
          <p>{t("privacy.securityText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.childrenTitle")}</h2>
          <p>{t("privacy.childrenText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.rightsTitle")}</h2>
          <p>{t("privacy.rightsText")}</p>

          <h2 className="text-2xl font-bold">{t("privacy.contactTitle")}</h2>
          <p>{t("privacy.contactText")}</p>
        </div>
      </div>
    </section>
  );
}
