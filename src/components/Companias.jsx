// Partners.jsx
import { useTranslation } from "react-i18next";

const partners = [
  "/ambetter.png",
  "/flblue.png",
  "/healthfirst.png",
  "/UHC.png",
  "/oscar.png",
  "/cigna.jpg",
  "/humana.png",
  "/aetna.png",
  "/BCBS.png",
  "/wellcare.jpg",
  "/caritas.png",
  "/devoted.png",
];

export default function Companias() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#02699C] mb-12">
        {t("partners.title")}
      </h2>

      <div className="flex justify-center gap-10 flex-wrap px-6">
        {partners.map((p, i) => (
          <div key={i} className="text-xl font-bold text-gray-600 opacity-80">
            <img
              src={p}
              alt={`${t("partners.altText")} ${i + 1}`}
              className="h-18 mx-auto my-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
