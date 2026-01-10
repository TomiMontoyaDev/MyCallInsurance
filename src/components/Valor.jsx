import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function Valor() {
  const { t } = useTranslation();

  // Animación foto agentes
  const photoRef = useRef(null);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPhoto(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (photoRef.current) observer.observe(photoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#0b6a99] text-white overflow-hidden mt-12">
      {/* FOTO AGENTES */}
      <div ref={photoRef} className="max-w-6xl mx-auto px-6 mb-20">
        <div
          className={`overflow-hidden rounded-2xl transition-all duration-1000 ease-out
          ${
            showPhoto ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/img/team.jpg"
            alt="Our agents"
            className={`w-[700px] h-[400px] object-cover transition-transform duration-700 hover:scale-105 mt-25 mx-auto rounded-2xl
            ${showPhoto ? "scale-100" : "scale-105"}
            `}
          />
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("whyAgent.title")}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            {t("whyAgent.description")}
          </p>
        </div>

        <div className="my-12 border-t border-white/40" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Feature
            title={t("whyAgent.features.experience.title")}
            description={t("whyAgent.features.experience.text")}
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            }
          />

          <Feature
            title={t("whyAgent.features.clarity.title")}
            description={t("whyAgent.features.clarity.text")}
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l3.09 6.26L22 10.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 15.14l-5-4.87 6.91-1.01L12 3Z"
                />
              </svg>
            }
          />

          <Feature
            title={t("whyAgent.features.service.title")}
            description={t("whyAgent.features.service.text")}
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                />
              </svg>
            }
          />

          <Feature
            title={t("whyAgent.features.satisfaction.title")}
            description={t("whyAgent.features.satisfaction.text")}
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="text-white/80">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-white/85 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
