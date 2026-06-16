import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { schoolInfo, news } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function DetailBerita() {
  const { id } = useParams();
  const article = news.find((item) => item.id === parseInt(id));

  // If article not found
  if (!article) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Berita Tidak Ditemukan
        </h2>
        <p className="mt-4 text-slate-500">Artikel yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link
          to="/berita"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-school-blue-900 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-school-blue-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  // Get other news as suggestions
  const otherNews = news.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <div className="w-full py-12 sm:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/berita"
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-school-blue-900 dark:text-slate-400 dark:hover:text-school-yellow-450 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Kembali ke Berita
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Main Content Column */}
        <motion.article 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="lg:col-span-8 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden"
        >
          {/* Header Metadata */}
          <div className="flex flex-wrap gap-2 items-center text-xs font-bold mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-school-blue-900/10 text-school-blue-900 dark:bg-school-blue-500/10 dark:text-school-blue-300">
              <Tag className="h-3 w-3" />
              {article.category}
            </span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(article.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <User className="h-3.5 w-3.5" />
              {article.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
            <img 
              src={article.photo} 
              alt={article.title} 
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="text-slate-655 dark:text-slate-300 leading-relaxed text-justify text-base sm:text-lg whitespace-pre-line space-y-4">
            {article.content}
          </div>
        </motion.article>

        {/* Sidebar Suggestions Column */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          
          {/* About School Card */}
          <div className="bg-school-blue-900 dark:bg-slate-950 text-white rounded-2xl p-6 shadow-sm relative overflow-hidden transition-colors">
            <div className="relative z-10">
              <h3 className="text-lg font-bold font-display text-school-yellow-400 mb-2">
                {schoolInfo.shortName}
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed mb-4">
                {schoolInfo.tagline}
              </p>
              <div className="border-t border-white/20 pt-4 flex flex-col gap-2 text-xs text-blue-150">
                <p>NPSN: {schoolInfo.npsn}</p>
                <p>Akreditasi: {schoolInfo.akreditasi}</p>
                <p>Kurikulum: {schoolInfo.curriculum}</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/* Other News Card List */}
          <div className="bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-display border-b border-slate-100 dark:border-slate-700 pb-3 mb-4">
              Berita Lainnya
            </h3>
            
            <div className="flex flex-col gap-5">
              {otherNews.map((item) => (
                <div key={item.id} className="flex gap-4 items-start group">
                  <img 
                    src={item.photo} 
                    alt={item.title} 
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-150 dark:border-slate-700"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-school-blue-700 dark:text-school-yellow-400 uppercase">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight mt-0.5 group-hover:text-school-blue-900 dark:group-hover:text-school-yellow-450 transition-colors font-display">
                      <Link to={`/berita/${item.id}`}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
              <Link
                to="/berita"
                className="inline-flex items-center text-xs font-bold text-school-blue-900 dark:text-school-yellow-400 hover:text-school-yellow-500"
              >
                Lihat Semua Berita
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
