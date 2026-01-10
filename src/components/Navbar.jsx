import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector.jsx";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: t("navbar.home") },
    { to: "/valor", label: t("navbar.value") },
    { to: "/team", label: t("navbar.team") },
    { to: "/principios", label: t("navbar.principles") },
  ];

  const baseLink =
    "px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5";

  const activeLink = "bg-[#02699C] text-white shadow-md scale-105";
  const normalLink = "text-[#02699C] hover:bg-[#02699C]/10";

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 shadow-lg 
      transition-all duration-300 ${
        scrolled ? "py-1 md:py-2" : "py-2 md:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/LogoMCI.png"
            alt="MCI Logo"
            className={`transition-all duration-300 object-contain drop-shadow-lg
              ${scrolled ? "h-14 md:h-16" : "h-20 md:h-24"}`}
            loading="lazy"
          />
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : normalLink}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* SERVICIOS */}
          <HashLink
            smooth
            to="/#servicios"
            className={`${baseLink} ${normalLink}`}
          >
            {t("navbar.services")}
          </HashLink>

          <LanguageSelector />

          {/* ICONOS SOCIALES */}
          <div className="flex items-center gap-3 ml-2 text-[#02699C]">
            <a
              href="https://www.instagram.com/mycallinsurance/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/MyCallInsurance/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/mycallinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:info@mycallinsurance.com"
              className="hover:text-red-500 transition hover:scale-110"
            >
              <MdEmail size={18} />
            </a>
          </div>

          {/* CONTACTO */}
          <HashLink
            smooth
            to="/#contacto"
            className="ml-3 bg-[#02699C] text-white px-5 py-2 rounded-full font-bold shadow-md 
              transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            {t("navbar.contact")}
          </HashLink>
        </div>

        {/* ===== MOBILE BUTTON ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#02699C] text-3xl transition-transform hover:scale-110"
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center py-6 gap-4">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 rounded-full font-semibold ${
                    isActive
                      ? "bg-[#02699C] text-white"
                      : "text-[#02699C] hover:bg-[#02699C]/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <HashLink
              smooth
              to="/#servicios"
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-full font-semibold text-[#02699C] hover:bg-[#02699C]/10"
            >
              {t("navbar.services")}
            </HashLink>

            {/* ICONOS SOCIALES MOBILE */}
            <div className="flex gap-6 text-2xl text-[#02699C] mt-2">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
              <MdEmail />
            </div>

            <HashLink
              smooth
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="bg-[#02699C] text-white px-8 py-3 rounded-full font-bold shadow-md"
            >
              {t("navbar.contact")}
            </HashLink>

            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
