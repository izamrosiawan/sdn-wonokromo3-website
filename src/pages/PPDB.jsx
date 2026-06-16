import { useState } from "react";
import { ClipboardList, CalendarDays, HelpCircle, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo, ppdbInfo } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PPDB() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
            alt="PPDB" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">
            Penerimaan Murid Baru (PPDB)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Informasi lengkap persyaratan, alur, dan jadwal PPDB Online {schoolInfo.shortName} Tahun Ajaran {ppdbInfo.academicYear}.
          </p>
        </div>
      </section>

      {/* Overview & Requirements Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Help Banner Alert */}
        <div className="mb-12 bg-amber-50 border border-amber-250 rounded-2xl p-5 text-amber-900 flex gap-4 items-start dark:bg-amber-950/20 dark:border-amber-900/50 dark:text-amber-300">
          <AlertCircle className="h-6 w-6 text-amber-550 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm sm:text-base">Butuh Bantuan Pendaftaran Online?</h3>
            <p className="text-xs sm:text-sm mt-1 text-amber-800 dark:text-amber-400">
              Sekolah membuka posko pendampingan fisik untuk membantu orang tua murid yang mengalami kendala teknis saat mengunggah berkas. Petugas IT kami bersiaga di kantor Tata Usaha pada hari Senin-Jumat jam 08:00 - 12:00 WIB.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Column */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CalendarDays className="h-6 w-6 text-school-blue-900 dark:text-school-yellow-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                Jadwal &amp; Timeline Penting
              </h2>
            </div>
            
            <div className="relative border-l border-slate-200 dark:border-slate-700 pl-6 ml-3 space-y-8">
              {ppdbInfo.timeline.map((step) => (
                <div key={step.step} className="relative">
                  {/* Step Bubble indicator */}
                  <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-school-blue-900 text-xs font-bold text-white ring-8 ring-white dark:bg-school-blue-700 dark:ring-slate-800">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-xs font-extrabold text-school-blue-700 dark:text-school-yellow-400 uppercase tracking-wide">
                      {step.date}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Requirements Column */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <ClipboardList className="h-6 w-6 text-school-blue-900 dark:text-school-yellow-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Persyaratan Dokumen
                </h2>
              </div>
              <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider font-semibold">
                *Dokumen diunggah dalam format PDF/JPG berukuran maks. 2MB
              </p>
              
              <ul className="space-y-4">
                {ppdbInfo.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-justify">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mr-3.5 mt-0.5" />
                    <span className="text-sm text-slate-655 dark:text-slate-350 leading-relaxed font-semibold">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
              <a
                href="https://ppdb.surabaya.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-school-yellow-450 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-sm hover:bg-school-yellow-500 hover:scale-[1.02] active:scale-[0.98] transition-all w-full"
              >
                Pendaftaran PPDB Surabaya
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-school-blue-900 text-school-yellow-400 mx-auto mb-4 dark:bg-school-blue-700">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <div className="w-12 h-1 bg-school-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            {ppdbInfo.faq.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-school-blue-900 dark:text-slate-200 dark:hover:text-school-yellow-400 font-display transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    {isOpen ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-400 text-justify text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
