import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();
  const [activeAgent, setActiveAgent] = useState(null);

  /* ================= AGENTES ================= */
  const agents = [
    {
      id: "mary",
      name: "Mary Bornachera",
      role: t("teamSection.roles.founder"),
      shortDesc: t("teamSection.mary"),
      img: "/img/mary.jpg",
      position: "object-[50%_75%]",
      modalDesc: t("teamSection.maryFull"),
    },
    {
      id: "carlos",
      name: "Carlos Montoya",
      role: t("teamSection.roles.cofounder"),
      shortDesc: t("teamSection.carlos"),
      img: "/img/carlos.jpg",
      position: "object-[50%_45%]",
      modalDesc: t("teamSection.carlosFull"),
    },
    {
      id: "lina",
      name: "Lina Montoya Carrillo",
      role: t("teamSection.roles.managingPartner"),
      shortDesc: t("teamSection.lina"),
      img: "/img/lina.jpg",
      position: "object-[50%_90%]",
      modalDesc: t("teamSection.linaFull"),
    },
  ];

  /* ================= SOPORTE ================= */
  const support = [
    {
      name: "Lidis",
      role: t("teamSection.roles.supportManager"),
      img: "/img/lidis.jpg",
      position: "object-[50%_20%]",
    },
    {
      name: "Daniela",
      role: t("teamSection.roles.supportSpecialist"),
      img: "/img/dani.jpg",
      position: "object-[90%_60%]",
    },
    {
      name: "Tatiana",
      role: t("teamSection.roles.supportSpecialist"),
      img: "/img/tatiana.jpeg",
      position: "object-[40%_55%]",
    },
    {
      name: "Tomas",
      role: t("teamSection.roles.supportSpecialist"),
      img: "/img/tomi.jpeg",
      fit: "object-contain",
      position: "object-[50%_10%]",
    },
  ];

  return (
    <>
      {/* ================= AGENTES ================= */}
      <section className="bg-[#02699C] text-white py-24 px-6 mt-15">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          {t("teamSection.agentsTitle")}
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-52 h-52 mx-auto rounded-full overflow-hidden shadow-xl mb-6 bg-[#02699C]">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className={`w-full h-full object-cover ${agent.position}`}
                />
              </div>

              <h3 className="text-xl font-bold">{agent.name}</h3>
              <p className="text-sm opacity-90 mb-4">{agent.role}</p>

              <p className="text-sm opacity-90 leading-relaxed max-w-sm mx-auto">
                {agent.shortDesc}
              </p>

              <button
                onClick={() => setActiveAgent(agent)}
                className="mt-6 bg-[#67C4DB] text-[#013b5a] font-semibold px-6 py-2 rounded-lg transition hover:scale-105 hover:shadow-lg"
              >
                {t("teamSection.ReadsMore")}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeAgent && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAgent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8 relative overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveAgent(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                  <img
                    src={activeAgent.img}
                    alt={activeAgent.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#02699C]">
                  {activeAgent.name}
                </h3>
                <p className="text-sm font-semibold mb-6">{activeAgent.role}</p>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {activeAgent.modalDesc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SOPORTE ================= */}
      <section className="bg-[#67C4DB] text-[#013b5a] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6">
            {t("teamSection.supportTitle")}
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            {t("teamSection.supportDesc")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-12">
          {support.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-lg mb-4 bg-[#02699C]">
                <img
                  src={p.img}
                  alt={p.name}
                  className={`w-full h-full object-cover ${p.fit || ""} ${
                    p.position || "object-center"
                  }`}
                />
              </div>

              <div className="bg-[#02699C] text-white py-3 px-4 rounded-xl shadow-md">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm opacity-90">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
