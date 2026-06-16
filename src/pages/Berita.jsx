import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo, news } from "../data/schoolData";

export default function Berita() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" 
            alt="Berita" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Kabar &amp; Pengumuman</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Kumpulan berita terkini, publikasi kegiatan, dan info pengumuman penting sekolah.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Filters and Search Bar Row */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 w-full">
          
          {/* Category Filter */}
          <div className="inline-flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm w-full lg:w-auto justify-center sm:justify-start">
            {[
              { id: "all", label: "Semua Kabar" },
              { id: "Kegiatan", label: "Kegiatan" },
              { id: "Pengumuman", label: "Pengumuman" },
              { id: "Prestasi", label: "Prestasi" }
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

          {/* Search Box */}
          <div className="relative w-full lg:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white shadow-sm focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-school-blue-700"
            />
          </div>

        </div>

        {/* News Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 dark:bg-slate-850 dark:border-slate-700 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all"
              >
                {/* Photo Header */}
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={item.photo} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-school-blue-900 text-white shadow-sm dark:bg-school-blue-700">
                    {item.category}
                  </span>
                </div>

                {/* Info and Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        {item.author}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 hover:text-school-blue-900 dark:hover:text-school-yellow-400 transition-colors font-display mb-2">
                      <Link to={`/berita/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed text-justify mb-6">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/berita/${item.id}`}
                    className="inline-flex items-center text-sm font-bold text-school-blue-900 dark:text-school-yellow-400 hover:text-school-yellow-500 mt-auto"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-200 dark:border-slate-750 flex flex-col items-center justify-center">
            <BookOpen className="h-12 w-12 text-slate-350 dark:text-slate-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Berita tidak ditemukan</h3>
            <p className="text-sm text-slate-400 mt-1">Coba gunakan kata kunci pencarian atau kategori yang lain.</p>
          </div>
        )}

      </section>
    </div>
  );
}
