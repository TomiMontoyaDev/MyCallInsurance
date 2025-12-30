import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector.jsx";

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
    { to: "/equipo", label: t("navbar.team") },
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-0">
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

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-4 ml-2">
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

          <LanguageSelector />

          <Link
            to="/contacto"
            className="ml-2 bg-[#02699C] text-white px-5 py-2 rounded-full font-bold shadow-md 
              transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            {t("navbar.contact")}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#02699C] text-3xl transition-transform hover:scale-110"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
