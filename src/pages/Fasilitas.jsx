import { Landmark, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { schoolInfo, facilities } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Fasilitas() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
            alt="Fasilitas Sekolah" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Fasilitas Sekolah</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Sarana dan prasarana pendukung kegiatan belajar mengajar terbaik di {schoolInfo.shortName}.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
            Lingkungan Belajar yang Representatif
          </h2>
          <div className="w-16 h-1 bg-school-yellow-400 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400">
            Kami meyakini bahwa lingkungan belajar yang aman, nyaman, dan lengkap adalah kunci penting untuk memicu rasa ingin tahu siswa dan menumbuhkan semangat belajar yang tinggi.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
            >
              {/* Image Section */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={fac.photo} 
                  alt={fac.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl bg-school-blue-900/90 text-school-yellow-400 backdrop-blur-sm shadow-sm dark:bg-school-blue-700/95">
                  <Landmark className="h-4.5 w-4.5" />
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-3 group-hover:text-school-blue-900 dark:group-hover:text-school-yellow-400 transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-455 leading-relaxed text-justify">
                    {fac.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
