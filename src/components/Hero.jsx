import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hero1 from "../img/hero1.jpg";

const images = [hero1];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#02699C] pt-32 pb-32 min-h-[95vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t("hero.title.before")}{" "}
            <span className="text-[#67C4DB]">{t("hero.title.highlight")}</span>
          </h1>

          <p className="text-white/90 text-lg max-w-xl">
            {t("hero.description")}
          </p>

          <p className="text-white/80">{t("hero.subDescription")}</p>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#02699C] px-8 py-3 rounded-full font-bold shadow-lg transition"
            >
              {t("hero.btnFreeQuote")}
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#02699C] transition"
            >
              {t("hero.btnServices")}
            </motion.a>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={t("hero.imgAlt")}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/15"></div>
        </motion.div>
      </div>
    </section>
  );
}
