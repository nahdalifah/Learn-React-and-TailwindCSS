import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="px-10 py-20 bg-gray-50">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-5xl mx-auto text-center mb-0">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Tentang Saya</h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Saya adalah seorang <span className="font-semibold text-purple-600">UI/UX Designer</span> &{" "}
          <span className="font-semibold text-blue-600">Web Developer</span> berdomisili di Jakarta
          dengan pengalaman lebih dari 5 tahun di industri kreatif. Passion saya adalah menciptakan solusi digital
          yang tidak hanya indah secara visual, tapi juga mudah digunakan dan berdampak positif bagi pengguna.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600 font-medium mb-8">
          <span className="bg-blue-50 px-4 py-2 rounded-full">✔ Problem Solver</span>
          <span className="bg-blue-50 px-4 py-2 rounded-full">✔ Team Player</span>
          <span className="bg-blue-50 px-4 py-2 rounded-full">✔ Fast Learner</span>
          <span className="bg-blue-50 px-4 py-2 rounded-full">✔ Kreatif & Adaptif</span>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-md font-semibold
                       hover:from-purple-600 hover:to-pink-500 hover:scale-105 transform transition-all duration-300"
          >
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;