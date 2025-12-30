import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();
  const reviews = t("reviewsList", { returnObjects: true });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () =>
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  const prev = () =>
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);

  return (
    <section className="bg-[#02699C] text-white py-20 px-6 relative">
      <h2 className="text-center text-4xl font-extrabold mb-12">
        {t("reviewsTitle")}
      </h2>

      <button
        onClick={prev}
        className="absolute left-2 md:left-[12%] top-1/2 -translate-y-1/2 
        bg-white text-[#02699C] p-3 rounded-full shadow-xl 
        hover:scale-110 transition transform z-30"
      >
        <FaChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="absolute right-2 md:right-[12%] top-1/2 -translate-y-1/2 
        bg-white text-[#02699C] p-3 rounded-full shadow-xl 
        hover:scale-110 transition transform z-30"
      >
        <FaChevronRight size={22} />
      </button>

      <div className="max-w-5xl mx-auto relative flex flex-col items-center">
        <div className="bg-white text-[#02699C] rounded-2xl p-10 shadow-xl animate-fadeSmooth w-full md:w-3/4">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400" size={50} />
          </div>

          <h3 className="text-2xl font-bold text-center mb-3">
            {reviews[current].name}
          </h3>
          <p className="text-lg text-center opacity-90 leading-relaxed">
            “{reviews[current].text}”
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? "bg-white" : "bg-[#67C4DB]"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-10 mb-10">
          <a
            href="https://g.page/r/Cd3axUF8nYQpEAI/review"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white rounded-full 
              hover:bg-white hover:text-[#02699C]
              font-semibold transition-all shadow-lg"
          >
            {t("reviewsBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}
