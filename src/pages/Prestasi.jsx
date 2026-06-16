import { useState } from "react";
import { Award, ShieldAlert, GraduationCap, Medal, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo, achievements } from "../data/schoolData";

export default function Prestasi() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  const filteredAchievements = achievements.filter((ach) => {
    const matchesCategory = activeCategory === "all" || ach.category === activeCategory;
    const matchesLevel = activeLevel === "all" || ach.level === activeLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" 
            alt="Prestasi Siswa" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Prestasi Sekolah &amp; Siswa</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Daftar torehan prestasi kebanggaan siswa-siswi dan institusi {schoolInfo.name}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Filters Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          
          {/* Category Filter */}
          <div className="inline-flex rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm shrink-0">
            {[
              { id: "all", label: "Semua Prestasi" },
              { id: "siswa", label: "Prestasi Siswa" },
              { id: "sekolah", label: "Prestasi Sekolah" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200
                  ${activeCategory === cat.id
                    ? "bg-school-blue-900 text-white shadow-md dark:bg-school-blue-700"
                    : "text-slate-650 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", label: "Semua Tingkat" },
              { id: "Nasional", label: "Nasional" },
              { id: "Provinsi", label: "Provinsi" },
              { id: "Kota", label: "Kota/Kab" }
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
                className={`
                  px-3.5 py-1.5 text-xs font-bold rounded-full transition-all border
                  ${activeLevel === lvl.id
                    ? "bg-school-yellow-450 border-school-yellow-500 text-slate-900 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 dark:hover:bg-slate-700"
                  }
                `}
              >
                {lvl.label}
              </button>
            ))}
          </div>

        </div>

        {/* Grid View */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.photo} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-school-blue-900 text-white shadow-sm dark:bg-school-blue-700">
                    <Star className="h-3 w-3 text-school-yellow-400 fill-school-yellow-400" />
                    Tingkat {item.level}
                  </div>
                  <span className="absolute bottom-4 right-4 inline-flex px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-sm shadow-sm uppercase tracking-wider">
                    {item.year}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display mb-1 group-hover:text-school-blue-900 dark:group-hover:text-school-yellow-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-school-blue-800 dark:text-school-yellow-400 mb-4 uppercase tracking-wide">
                      Oleh: {item.winner}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold uppercase">
                      Kategori: {item.category === "siswa" ? "Prestasi Siswa" : "Prestasi Sekolah"}
                    </span>
                    <Medal className="h-4.5 w-4.5 text-school-yellow-500 fill-school-yellow-500/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-200 dark:border-slate-750 flex flex-col items-center justify-center">
            <Award className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Belum ada prestasi</h3>
            <p className="text-sm text-slate-400 mt-1">Gunakan filter kategori atau tingkatan kompetisi yang lain.</p>
          </div>
        )}

      </section>
    </div>
  );
}
