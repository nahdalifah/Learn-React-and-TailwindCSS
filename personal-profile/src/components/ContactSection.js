import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-10 shadow-md">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Tertarik Kolaborasi?</h2>
            <p className="text-gray-600 mb-6">
              Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan produk digital yang impactful buat bisnismu.
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Mail /> alifah.5002@gmail.com</p>
              <p className="flex items-center gap-2"><Phone /> 0896-6399-1239</p>
              <p className="flex items-center gap-2"><MapPin /> Surabaya, Indonesia</p>
            </div>
          </div>
          <div className="md:w-2/3 bg-white rounded-2xl shadow-md p-6">
            <form className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Nama" className="w-1/2 p-3 border rounded-lg" />
                <input type="email" placeholder="Email" className="w-1/2 p-3 border rounded-lg" />
              </div>
              <textarea placeholder="Pesan" className="w-full p-3 border rounded-lg h-32"></textarea>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                Kirim Pesan <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;