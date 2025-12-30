import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = i18n.language || "es";

  const languages = {
    es: { label: "Español", img: "/img/ESP.png" },
    en: { label: "English", img: "/img/USA.png" },
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Selector */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white/95 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
      >
        <img
          src={languages[currentLang].img}
          alt={languages[currentLang].label}
          className="w-5 h-5 rounded-full"
        />

        <span className="text-sm font-semibold text-gray-800">
          {languages[currentLang].label}
        </span>

        {/* Flechita animada */}
        <ChevronDown
          size={18}
          className={`text-gray-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-50 min-w-[160px]">
          {Object.entries(languages).map(([key, item]) => (
            <button
              key={key}
              onClick={() => changeLanguage(key)}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full transition ${
                currentLang === key ? "bg-gray-50 font-bold" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
