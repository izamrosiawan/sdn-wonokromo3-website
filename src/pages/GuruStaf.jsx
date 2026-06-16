import { useState } from "react";
import { UserCheck, Users, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo, teachers } from "../data/schoolData";

export default function GuruStaf() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredStaff = teachers.filter((person) => {
    if (activeTab === "all") return true;
    return person.category === activeTab;
  });

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
            alt="Pendidik" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Guru &amp; Staf</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Mengenal pendidik dan tenaga kependidikan profesional di {schoolInfo.name}.
          </p>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Filter Navigation Tab */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            {[
              { id: "all", label: "Semua", icon: Users },
              { id: "guru", label: "Pendidik (Guru)", icon: UserCheck },
              { id: "staf", label: "Tenaga Kependidikan (Staf)", icon: Briefcase }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200
                    ${activeTab === tab.id
                      ? "bg-school-blue-900 text-white shadow-md dark:bg-school-blue-700"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    }
                  `}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Grid container */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((person) => (
              <motion.div
                layout
                key={person.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={person.photo} 
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5 text-center flex flex-col justify-center min-h-[120px]">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-1 font-display">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-bold text-school-blue-700 dark:text-school-yellow-400 leading-tight">
                    {person.role}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs font-semibold text-slate-400 tracking-wider uppercase">
                    {person.category === "guru" ? "Pendidik" : "Tenaga Kependidikan"}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400">Tidak ada data guru atau staf ditemukan.</p>
          </div>
        )}

      </section>
    </div>
  );
}
