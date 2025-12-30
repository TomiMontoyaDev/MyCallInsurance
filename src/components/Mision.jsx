import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Mision() {
  const { t } = useTranslation();

  return (
    <section
      id="mision"
      className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xl"
      >
        <img
          src="/img/Mision.jpg"
          alt={t("mision.imgAlt")}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center md:text-left space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#02699C]">
          {t("mision.title")}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {t("mision.desc1")}
        </p>

        <p className="text-gray-600 text-lg">{t("mision.desc2")}</p>
      </motion.div>
    </section>
  );
}
