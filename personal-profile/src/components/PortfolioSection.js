import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const portfolios = [
  {
    title: "Joblitz",
    img: "/images/Joblitz.png",
    desc: "Website sistem HR yang memudahkan proses perekrutan.",
  },
  {
    title: "MuseumGo",
    img: "/images/MuseumGO.png",
    desc: "Aplikasi transformasi digital museum berbasis Augmented Reality.",
  },
  {
    title: "Sainster",
    img: "/images/Sainster.png",
    desc: "Aplikasi edukasi sains, dari learner menjadi master!",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Portfolio Saya</h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        Beberapa project terbaik yang pernah saya kerjakan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {portfolios.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                Lihat Detail
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;