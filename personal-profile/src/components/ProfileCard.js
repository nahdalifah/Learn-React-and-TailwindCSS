import React from "react";
import { Lightbulb, Rocket } from "lucide-react";

const ProfileCard = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/20 blur-[180px] rounded-full opacity-40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-20 gap-12">

        <div className="flex flex-col space-y-4 md:w-1/2 text-white text-center md:text-left">
          <p className="text-gray-200 text-sm">Hi, I’m</p>
          <h1 className="text-5xl font-bold leading-tight">
            Nahdah Alifah Fitriani
          </h1>

          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 w-fit mx-auto md:mx-0 text-center shadow-lg font-medium text-sm border border-white/30">
            UI/UX Designer & Web Developer
          </div>

          <p className="text-gray-100 leading-relaxed mt-2 max-w-lg mx-auto md:mx-0">
            Membantu brand dan bisnis membangun produk digital yang impactful
            lewat desain yang kreatif, modern, dan user-centric.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-100 transition transform hover:-translate-y-1">
              Lihat Karya
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1">
              Hubungi Saya
            </button>
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-xl overflow-hidden border-[6px] border-white shadow-2xl">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Lightbulb className="text-yellow-500 w-6 h-6" />
            </div>
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Rocket className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;