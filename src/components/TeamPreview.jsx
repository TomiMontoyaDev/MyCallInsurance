import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function TeamPreview() {
  const { t } = useTranslation();

  return (
    <section
      id="team-preview"
      className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-14 items-center"
    >
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#02699C]">
          {t("teamPreview.title")}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {t("teamPreview.desc")}
        </p>

        <Link to="/team">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block
              bg-[#02699C]
              hover:bg-[#228AB5]
              text-white
              font-bold
              px-8
              py-4
              rounded-xl
              shadow-lg
              transition-all
            "
          >
            {t("teamPreview.button")}
          </motion.button>
        </Link>
      </motion.div>

      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-xl"
      >
        <img
          src="/img/team.jpg"
          alt={t("teamPreview.imgAlt")}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>
    </section>
  );
}
