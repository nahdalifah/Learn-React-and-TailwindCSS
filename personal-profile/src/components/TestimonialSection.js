import React from "react";

const testimonials = [
  {
    name: "Citra Nadya",
    role: "Product Manager, Fintech",
    text: "Nahdah mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
  },
  {
    name: "Rama Putra",
    role: "CEO, EduStartup",
    text: "Kreativitas & kecepatan kerja Nahdah luar biasa. Landing page yang dibuat sangat modern & efektif meningkatkan konversi produk kami.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Testimoni Klien</h2>
      <p className="text-gray-600 mb-10">
        Apa kata mereka yang pernah bekerja sama dengan saya.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {testimonials.map((testi) => (
          <div
            key={testi.name}
            className="bg-white rounded-3xl shadow-md p-8 w-full md:w-1/2 text-left"
          >
            <h3 className="font-semibold text-lg">{testi.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{testi.role}</p>
            <p className="text-gray-600 italic">“{testi.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;