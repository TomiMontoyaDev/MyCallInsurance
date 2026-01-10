import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const principios = [
  { key: "social", image: "/img/principio1.jpg" },
  { key: "empathy", image: "/img/principio2.jpg" },
  { key: "service", image: "/img/principio3.jpg" },
  { key: "education", image: "/img/principio4.jpg" },
  { key: "integrity", image: "/img/principio5.jpg" },
  { key: "collaboration", image: "/img/principio6.jpg" },
];

/* ===== Variants ===== */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Principios() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0b6a99] text-white py-24 mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t("whyAgent.principles.title")}
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {principios.map((itemData) => (
            <motion.div key={itemData.key} variants={item}>
              <PrincipleCard
                image={itemData.image}
                title={t(`whyAgent.principles.items.${itemData.key}.title`)}
                text={t(`whyAgent.principles.items.${itemData.key}.text`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PrincipleCard({ image, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl group"
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-[420px] object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0.95 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-y-6 right-0 w-[70%] bg-[#0b6a99] rounded-xl p-6 shadow-xl"
      >
        <h3 className="text-3xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/90 leading-relaxed">{text}</p>
      </motion.div>
    </motion.div>
  );
}
