import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="bg-[#02699C] text-white overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-14"
      >
        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
          {t("contactsection.title")}
        </h2>
        <p className="text-lg max-w-xl mx-auto opacity-90">
          {t("contactsection.subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2">
        {/* IMAGEN */}
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src="/imgcontact.jpg"
            alt={t("contactsection.imageAlt")}
            className="w-full h-full object-cover brightness-95"
          />
        </motion.div>

        {/* FORM & INFO */}
        <div className="bg-[#67C4DB] p-10 flex flex-col gap-8 justify-center">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-4 text-[#013b5a] font-semibold text-xl leading-relaxed"
          >
            <div className="flex items-center gap-3">
              <FaPhoneAlt /> {t("contactsection.phone")}
            </div>
            <div className="flex items-center gap-3">
              <FaHome /> {t("contactsection.address")}
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope /> {t("contactsection.email")}
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt /> {t("contactsection.location")}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#ffffff25] backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-4 text-white border border-white/20"
          >
            <h3 className="text-2xl font-bold drop-shadow-md mb-3">
              {t("contactsection.formTitle")}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="input-field"
                type="text"
                placeholder={t("contactsection.name")}
                required
              />
              <input
                className="input-field"
                type="text"
                placeholder={t("contactsection.lastname")}
                required
              />
            </div>

            <input
              className="input-field"
              type="email"
              placeholder={t("contactsection.emailInput")}
              required
            />

            <PhoneInput
              country={"us"}
              enableSearch={true}
              placeholder={t("contactsection.phoneInput")}
              inputClass="!w-full !bg-white/20 !border !border-white/30 !text-white placeholder-white/70 !py-3 !pl-14 !rounded-lg"
              buttonClass="!bg-white/30 !border-none"
              dropdownClass="!text-black"
              containerClass="rounded-lg"
            />

            <textarea
              className="input-field"
              rows="4"
              placeholder={t("contactsection.message")}
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-[#013b5a] hover:bg-[#014d72] font-bold py-3 rounded-lg transition-all shadow-lg"
            >
              {t("contactsection.sendButton")} ✨
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="w-full h-10 bg-gradient-to-b from-[#02699C] to-transparent"></div>
    </section>
  );
}
