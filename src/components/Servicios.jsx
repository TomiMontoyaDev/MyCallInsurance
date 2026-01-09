import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Servicios() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });

  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleQuoteClick = () => {
    if (isMobile) {
      window.location.href = "tel:+14074019872";
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
      <section id="servicios" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#02699C] text-center mb-12">
          {t("servicesTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center
                border-t-4 border-[#67C4DB]
                transform transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <img
                src={
                  index === 0
                    ? "/medicarelogo.png"
                    : index === 1
                    ? "/healthlogo.png"
                    : index === 2
                    ? "/complementarioslogo.png"
                    : "/vidalogo.png"
                }
                alt={service.title}
                className="w-24 h-24 mx-auto mb-4"
              />

              <h3 className="text-xl font-bold text-[#02699C] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">{service.text}</p>

              <button
                onClick={handleQuoteClick}
                className="bg-[#02699C] hover:bg-[#02557e]
                  text-white font-semibold py-2 px-6 rounded-lg
                  transition-all"
              >
                {t("quote")}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL DESKTOP ================= */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white max-w-md w-full rounded-2xl p-8 text-center shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#02699C] mb-4">
              {t("callModal.title")}
            </h3>

            <p className="text-gray-600 mb-6">{t("callModal.desc")}</p>

            <a
              href="tel:+14074019872"
              className="block bg-[#02699C] hover:bg-[#02557e]
                text-white font-bold py-3 rounded-lg mb-4 transition-all"
            >
              📞 (407) 401-9872
            </a>

            <button
              onClick={() => setOpenModal(false)}
              className="text-sm text-gray-500 hover:underline"
            >
              {t("callModal.close")}
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
