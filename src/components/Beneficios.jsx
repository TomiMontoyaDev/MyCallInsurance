import { useTranslation } from "react-i18next";

export default function Beneficios() {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#02699C] mb-12">
        {t("benefits.title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="
              bg-white p-6 rounded-lg
              border-t-4 border-[#02699C]
              shadow-md
              transform transition-all duration-500 ease-out
              hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
            "
          >
            <h3 className="text-xl font-bold mb-3 text-[#02699C]">
              {t(`benefits.items.${i}.title`)}
            </h3>
            <p className="text-gray-600">{t(`benefits.items.${i}.text`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
