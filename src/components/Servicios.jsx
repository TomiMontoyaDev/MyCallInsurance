import { useTranslation } from "react-i18next";

export default function Servicios() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });

  return (
    <section id="servicios" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-[#02699C] text-center mb-12">
        {t("servicesTitle")}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-[#67C4DB] hover:shadow-xl transition-shadow duration-300 ease-in-out hover:scale-105 transform"
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
            <button className="bg-[#02699C] hover:bg-[#02557e] text-white font-semibold py-2 px-6 rounded-lg transition-all cursor-pointer">
              {t("quote")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
