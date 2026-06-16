import { Award, Compass, Heart, Shield, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { schoolInfo, principalProfile, visions, missions } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Profil() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" 
            alt="Perpustakaan" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Profil Sekolah</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Kenali lebih dekat visi, misi, sejarah, dan figur kepemimpinan di {schoolInfo.name}.
          </p>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Visi Column */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-school-yellow-400/10 rounded-full"></div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-school-yellow-400 text-slate-900 mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-school-blue-900 dark:text-white font-display mb-4">Visi Sekolah</h2>
              <p className="text-slate-650 dark:text-slate-300 leading-relaxed text-lg text-justify italic">
                "{visions[0]}"
              </p>
            </div>
            <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {schoolInfo.name}
            </div>
          </motion.div>

          {/* Misi Column */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-school-blue-900 text-school-yellow-400 mb-6 dark:bg-school-blue-700">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-school-blue-900 dark:text-white font-display mb-6">Misi Sekolah</h2>
            <ul className="space-y-4">
              {missions.map((misi, index) => (
                <li key={index} className="flex items-start text-justify">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-school-blue-900 dark:bg-slate-700 dark:text-school-yellow-400 mr-4">
                    {index + 1}
                  </span>
                  <span className="text-slate-650 dark:text-slate-300 leading-relaxed text-base">
                    {misi}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sejarah Sekolah Section */}
      <section className="py-16 sm:py-24 bg-slate-150 dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-school-blue-900/10 text-school-blue-900 rounded-xl dark:bg-school-blue-500/10 dark:text-school-blue-400">
                  <Landmark className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
                  Sejarah Singkat
                </h2>
              </div>
              <div className="w-16 h-1 bg-school-yellow-400 rounded-full"></div>
              
              <div className="text-slate-650 dark:text-slate-350 space-y-4 leading-relaxed text-justify">
                <p>
                  SDN Wonokromo III Surabaya didirikan pada tahun 1978 di kawasan Wonokromo yang bersejarah di pusat kota Surabaya. Awalnya, sekolah ini dibangun untuk memenuhi kebutuhan akses pendidikan dasar yang terus meningkat bagi anak-anak usia sekolah di sekitar kelurahan Wonokromo dan sekitarnya.
                </p>
                <p>
                  Seiring berjalannya waktu, sekolah ini terus meningkatkan mutu pendidikan, sarana prasarana, dan kompetensi tenaga pendidiknya. Dari awal berdiri dengan bangunan yang sederhana, kini SDN Wonokromo III telah berkembang pesat menjadi sekolah dasar berfasilitas lengkap dengan akreditasi A, serta ditunjuk sebagai salah satu **Sekolah Penggerak** di Surabaya.
                </p>
                <p>
                  Salah satu pencapaian terbesar sekolah adalah pengakuan sebagai **Sekolah Adiwiyata Mandiri** tingkat nasional pada tahun 2024. Penghargaan ini menjadi bukti komitmen nyata dari seluruh warga sekolah dalam menanamkan nilai-nilai kepedulian lingkungan hidup secara nyata di dalam aktivitas pembelajaran sehari-hari.
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-3 bg-white dark:bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" 
                  alt="Gedung SDN Wonokromo III"
                  className="w-full h-[350px] object-cover rounded-xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Profil Kepala Sekolah Detail Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
            Kepemimpinan Sekolah
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">Figur penggerak yang memimpin SDN Wonokromo III Surabaya.</p>
        </div>

        <motion.div 
          {...fadeInUp}
          className="bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl shadow-sm p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
        >
          <img 
            src={principalProfile.photo} 
            alt={principalProfile.name}
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-school-blue-900 dark:border-school-yellow-400 shadow-md"
          />
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-school-blue-900 dark:text-white font-display">
              {principalProfile.name}
            </h3>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
              NIP. {principalProfile.nip}
            </p>
            <p className="mt-2 text-xs inline-flex px-3 py-1 bg-school-blue-900 text-white font-bold rounded-full dark:bg-school-blue-700">
              {principalProfile.title}
            </p>
            
            <div className="mt-6 border-t border-slate-100 dark:border-slate-700 pt-6 text-slate-650 dark:text-slate-300 leading-relaxed text-justify">
              <p className="italic">
                "Memimpin sebuah institusi pendidikan adalah tanggung jawab besar yang memerlukan ketulusan hati dan keseriusan penuh. Kami di SDN Wonokromo III percaya bahwa setiap murid dilahirkan istimewa dengan potensinya masing-masing. Tugas kitalah sebagai pendidik untuk menuntun mereka menemukan dan mengembangkan potensi tersebut sebaik mungkin di lingkungan yang kondusif dan asri."
              </p>
              <p className="mt-4 font-bold text-slate-800 dark:text-white">
                - Dra. Hj. Endang Sulastri, M.Pd.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
