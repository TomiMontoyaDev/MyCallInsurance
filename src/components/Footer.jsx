import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#013b5a] text-white pt-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* LOGO / BRAND */}
        <div>
          <h3 className="text-2xl font-bold mb-3">My Call Insurance</h3>
          <p className="text-white/80 leading-relaxed">{t("footer.desc")}</p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-bold mb-3">{t("footer.links")}</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              {/* ✅ LINK CORRECTO */}
              <Link to="/privacy-policy" className="hover:underline transition">
                {t("footer.privacy")}
              </Link>
            </li>

            <li>
              <a href="#contacto" className="hover:underline">
                {t("footer.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold mb-3">{t("footer.contact")}</h4>
          <p className="text-white/80">📞 (407) 401-9872</p>
          <p className="text-white/80">📧 info@mycallinsurance.com</p>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="font-bold mb-3">{t("footer.legal")}</h4>
          <p className="text-white/70 text-sm leading-relaxed">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-white/20 py-6 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} My Call Insurance. All rights reserved.
        </p>
        <p className="mt-2">
          {t("footer.designedBy")}{" "}
          <span className="font-semibold text-white">Tomás Montoya</span>
        </p>
      </div>
    </footer>
  );
}
