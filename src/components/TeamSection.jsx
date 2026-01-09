import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();

  const agents = [
    {
      name: "Mary Bornachera",
      role: "Founder / Licensed Insurance Agent",
      desc: t("team.mary"),
      img: "/img/mary.jpg",
    },
    {
      name: "Carlos Montoya",
      role: "Co-Founder / Licensed Insurance Agent",
      desc: t("team.carlos"),
      img: "/img/carlos.jpg",
    },
    {
      name: "Lina Montoya Carrillo",
      role: "Managing Partner / Licensed Insurance Agent",
      desc: t("team.lina"),
      img: "/img/lina.jpg",
    },
  ];

  const support = [
    {
      name: "Lidis",
      role: "Gerente de Soporte y Servicio",
      img: "/img/lidis.jpg",
    },
    {
      name: "Daniela",
      role: "Especialista en soporte y servicio",
      img: "/img/daniela.jpg",
    },
    {
      name: "Tatiana",
      role: "Especialista en soporte y servicio",
      img: "/img/tatiana.jpg",
    },
    {
      name: "Tomas",
      role: "Especialista en soporte y servicio",
      img: "/img/tomas.jpg",
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
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <img
                src={agent.img}
                alt={agent.name}
                className="w-52 h-52 mx-auto rounded-full object-cover shadow-xl mb-6"
              />

              <h3 className="text-xl font-bold">{agent.name}</h3>
              <p className="text-sm opacity-90 mb-4">{agent.role}</p>

              <p className="text-sm opacity-90 leading-relaxed max-w-sm mx-auto">
                {agent.desc}
              </p>

              <button className="mt-6 bg-[#67C4DB] text-[#013b5a] font-semibold px-6 py-2 rounded-lg hover:scale-105 transition">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

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
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-44 h-44 mx-auto rounded-full object-cover shadow-lg mb-4"
              />

              <div className="bg-[#02699C] text-white py-3 px-4 rounded-xl">
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
