import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation(); // 👈 Activamos traducción
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#67C4DB] text-white py-20 text-center px-6 relative">
      <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>

      <p className="text-lg max-w-2xl mx-auto mb-6">{t("cta.description")}</p>

      <button className="bg-[#02699C] hover:bg-[#02557e] text-white font-bold py-3 px-10 rounded-xl transition-all shadow-md">
        {t("cta.button")}
      </button>

      {/* BOTÓN FLOTANTE */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 bg-[#02699C] hover:bg-[#02557e] text-white p-4 rounded-full shadow-lg transition-all duration-300 flex justify-center items-center transform
          ${
            showScroll
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5 pointer-events-none"
          }
        `}
        aria-label={t("cta.scrollTop")}
      >
        <FiArrowUp size={22} />
      </button>
    </section>
  );
}
