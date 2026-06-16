import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Award, ArrowUpRight } from "lucide-react";
import { schoolInfo } from "../data/schoolData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors duration-300">
      {/* Top Footer Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand/About school Column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold text-white font-display tracking-tight">
                {schoolInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              "{schoolInfo.tagline}"
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-school-blue-900/60 border border-school-blue-700/50 text-blue-200">
                <Award className="h-3 w-3 text-school-yellow-400" />
                Sekolah Penggerak
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-800/50 text-emerald-300">
                <Award className="h-3 w-3 text-school-yellow-400" />
                Adiwiyata Mandiri
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Peta Situs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Beranda" },
                { to: "/profil", label: "Profil Sekolah" },
                { to: "/guru-staf", label: "Guru & Tenaga Kependidikan" },
                { to: "/fasilitas", label: "Fasilitas Belajar" },
                { to: "/prestasi", label: "Prestasi" }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="hover:text-school-yellow-400 flex items-center transition-colors group text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 mr-1 text-slate-655 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Access Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Akses Langsung
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/berita", label: "Kabar & Pengumuman" },
                { to: "/galeri", label: "Galeri Foto" },
                { to: "/ppdb", label: "PPDB Online " + schoolInfo.curriculum },
                { to: "/kontak", label: "Hubungi Kontak Kami" }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="hover:text-school-yellow-400 flex items-center transition-colors group text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 mr-1 text-slate-655 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-slate-400">
                <MapPin className="h-5 w-5 mr-3 shrink-0 text-school-yellow-400" />
                <span className="leading-relaxed">{schoolInfo.address}</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-school-yellow-400" />
                <span>{schoolInfo.phone}</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-school-yellow-400" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-school-yellow-400 transition-colors">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-950 py-6 text-center text-xs text-slate-500 border-t border-slate-800/40">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:px-6 lg:px-8">
          <p>© {currentYear} {schoolInfo.name}. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex space-x-4">
            <a 
              href={schoolInfo.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-school-yellow-400 hover:border-slate-700 transition-all"
              aria-label="Facebook"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a 
              href={schoolInfo.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-school-yellow-400 hover:border-slate-700 transition-all"
              aria-label="Instagram"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a 
              href={schoolInfo.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-school-yellow-400 hover:border-slate-700 transition-all"
              aria-label="YouTube"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3v6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
