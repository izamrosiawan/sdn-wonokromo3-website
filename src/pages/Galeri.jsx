import { useState } from "react";
import { Image, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo, galleryItems } from "../data/schoolData";

export default function Galeri() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    return activeCategory === "all" || item.category === activeCategory;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
            alt="Galeri Kegiatan" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Galeri Dokumentasi</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Kumpulan dokumentasi foto kegiatan belajar mengajar, sarana prasarana, dan prestasi di {schoolInfo.shortName}.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm justify-center">
            {[
              { id: "all", label: "Semua Foto" },
              { id: "Kegiatan", label: "Kegiatan" },
              { id: "Fasilitas", label: "Fasilitas" },
              { id: "Prestasi", label: "Prestasi" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200
                  ${activeCategory === cat.id
                    ? "bg-school-blue-900 text-white shadow-md dark:bg-school-blue-700"
                    : "text-slate-655 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm cursor-pointer relative group aspect-video sm:aspect-square"
              >
                {/* Photo */}
                <img 
                  src={item.photo} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-school-blue-900/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex flex-col items-center justify-center text-white p-4 text-center">
                  <Eye className="h-8 w-8 mb-2 text-school-yellow-400 transform translate-y-2 group-hover:translate-y-0 transition-transform" />
                  <h3 className="text-sm font-bold font-display line-clamp-1">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-200 mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center justify-center">
            <Image className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
            <p className="text-slate-500 dark:text-slate-400">Tidak ada foto untuk kategori ini.</p>
          </div>
        )}

      </section>

      {/* Lightbox Modal (Framer Motion) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 sm:p-8 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all z-50 border border-white/10"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all z-55 border border-white/10 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={showNext}
              className="absolute right-4 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all z-55 border border-white/10 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Lightbox Image Box */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[75vh] overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].photo}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain max-h-[75vh] select-none"
              />
            </motion.div>

            {/* Description Details */}
            <div 
              className="mt-6 text-center max-w-xl text-white px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-school-yellow-400 text-slate-950 uppercase mb-2">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold font-display">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-sm text-slate-400 mt-1">{filteredItems[lightboxIndex].description}</p>
            </div>

            {/* Mobile swipe info */}
            <div className="sm:hidden flex justify-between gap-8 mt-4">
              <button 
                onClick={showPrev}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold"
              >
                Sebelumnya
              </button>
              <button 
                onClick={showNext}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold"
              >
                Selanjutnya
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
