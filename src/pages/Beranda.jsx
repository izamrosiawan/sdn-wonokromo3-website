import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Award, CheckCircle, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { schoolInfo, principalProfile, schoolStats, news, achievements, ppdbInfo } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Beranda() {
  // Get latest 3 news
  const latestNews = news.slice(0, 3);
  // Get latest 3 achievements
  const latestAchievements = achievements.slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white dark:bg-slate-950 py-24 sm:py-32 lg:py-40">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200" 
            alt="SDN Wonokromo III Surabaya" 
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-0"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold bg-school-blue-900/80 border border-school-blue-700/50 text-school-yellow-400 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Sekolah Penggerak Angkatan 2025</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-display max-w-4xl leading-tight"
          >
            Mendidik Generasi <span className="text-school-yellow-400">Berkarakter</span> &amp; <span className="text-blue-400">Berprestasi</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Selamat Datang di Portal Resmi {schoolInfo.name}. Kami hadir mewujudkan pendidikan dasar berkualitas berlandaskan nilai pancasila dan kelestarian lingkungan.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4"
          >
            <Link
              to="/ppdb"
              className="inline-flex items-center justify-center rounded-xl bg-school-yellow-400 px-6 py-3.5 text-base font-bold text-slate-900 shadow-lg hover:bg-school-yellow-300 hover:shadow-yellow-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Info PPDB {ppdbInfo.academicYear}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/profil"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Jelajahi Profil
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Statistik Strip */}
      <section className="relative -mt-10 z-25 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700/80 md:grid-cols-4 lg:p-8">
          {schoolStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center p-3"
            >
              <span className="text-3xl font-extrabold text-school-blue-900 dark:text-school-yellow-400 lg:text-4xl">
                {stat.value}{stat.suffix}
              </span>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Sambutan Kepala Sekolah */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 relative"
          >
            {/* Design accents */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-school-blue-900/10 rounded-3xl -z-10 dark:bg-school-blue-500/5"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-school-yellow-500/10 rounded-3xl -z-10 dark:bg-school-yellow-500/5"></div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-800 p-3">
              <img 
                src={principalProfile.photo} 
                alt={principalProfile.name}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-school-blue-900 dark:text-white">{principalProfile.name}</h4>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">NIP. {principalProfile.nip}</p>
                <p className="mt-1 text-xs inline-flex px-3 py-1 bg-school-yellow-400 text-slate-900 font-bold rounded-full">{principalProfile.title}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
              Sambutan Kepala Sekolah
            </h2>
            <div className="w-16 h-1 bg-school-yellow-400 rounded-full"></div>
            <p className="text-slate-650 dark:text-slate-350 leading-relaxed whitespace-pre-line text-justify text-base">
              {principalProfile.message}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Berita Terbaru */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
                Kabar &amp; Kegiatan Terbaru
              </h2>
              <p className="mt-3 text-slate-500 dark:text-slate-450">Ikuti info terkini dan agenda kegiatan di SDN Wonokromo III.</p>
            </div>
            <Link
              to="/berita"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-school-blue-900 dark:text-school-yellow-400 hover:text-school-yellow-500 transition-colors group"
            >
              Lihat Semua Berita
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestNews.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/60 dark:bg-slate-900 dark:border-slate-800 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.photo} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-school-blue-900 text-white shadow-sm dark:bg-school-blue-700">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {item.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 hover:text-school-blue-950 dark:hover:text-school-yellow-400 transition-colors font-display mb-2">
                    <Link to={`/berita/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/berita/${item.id}`}
                    className="mt-auto inline-flex items-center text-sm font-bold text-school-blue-900 dark:text-school-yellow-400 hover:text-school-yellow-500"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Prestasi Terbaru */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-school-blue-900 dark:text-white font-display">
              Prestasi Unggulan Siswa
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-450">Apapun minat dan bakatnya, kami siap menuntun menuju kesuksesan.</p>
          </div>
          <Link
            to="/prestasi"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-school-blue-900 dark:text-school-yellow-400 hover:text-school-yellow-500 transition-colors group"
          >
            Lihat Semua Prestasi
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/60 dark:bg-slate-800 dark:border-slate-700 shadow-sm p-6 relative hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl dark:text-amber-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                    Tingkat {item.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-school-blue-700 dark:text-school-yellow-400 mb-3">
                  Peraih: {item.winner} ({item.year})
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA Hubungi Sekolah */}
      <section className="py-16 bg-school-blue-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold sm:text-4xl font-display mb-4"
          >
            Mari Bergabung Bersama Kami!
          </motion.h2>
          <p className="text-base sm:text-lg text-blue-200 max-w-2xl leading-relaxed mb-8">
            Daftarkan putra-putri Anda sekarang di {schoolInfo.name}. Dapatkan lingkungan belajar terbaik yang menyenangkan, aman, dan berwawasan masa depan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/ppdb"
              className="inline-flex items-center justify-center rounded-xl bg-school-yellow-400 px-6 py-3.5 text-base font-bold text-slate-900 shadow-md hover:bg-school-yellow-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Pendaftaran Siswa Baru
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Hubungi Panitia PPDB
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
