import { useTranslation } from "react-i18next";

export default function Beneficios() {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#02699C] text-center mb-12">
        {t("benefits.title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#02699C] bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-[#02699C]">
            {t("benefits.items.0.title")}
          </h3>
          <p className="text-gray-600">{t("benefits.items.0.text")}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#02699C] bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-[#02699C]">
            {t("benefits.items.1.title")}
          </h3>
          <p className="text-gray-600">{t("benefits.items.1.text")}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#02699C] bg-white hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-[#02699C]">
            {t("benefits.items.2.title")}
          </h3>
          <p className="text-gray-600">{t("benefits.items.2.text")}</p>
        </div>
      </div>
    </section>
  );
}
