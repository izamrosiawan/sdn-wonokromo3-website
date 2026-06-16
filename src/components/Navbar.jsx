import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo } from "../data/schoolData";

const navLinks = [
  { path: "/", label: "Beranda" },
  { path: "/profil", label: "Profil" },
  { path: "/guru-staf", label: "Guru & Staf" },
  { path: "/fasilitas", label: "Fasilitas" },
  { path: "/prestasi", label: "Prestasi" },
  { path: "/berita", label: "Berita" },
  { path: "/galeri", label: "Galeri" },
  { path: "/ppdb", label: "PPDB" },
  { path: "/kontak", label: "Kontak" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/50 dark:bg-slate-900/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-school-blue-900 text-school-yellow-400 shadow-md group-hover:scale-105 transition-transform dark:bg-school-blue-700">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-base font-bold text-school-blue-900 leading-tight dark:text-white font-display">
                {schoolInfo.shortName}
              </span>
              <span className="block text-xs font-semibold text-slate-500 tracking-wider uppercase dark:text-slate-400">
                Surabaya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                  ${isActive 
                    ? "bg-school-blue-900 text-white dark:bg-school-blue-700" 
                    : "text-slate-700 hover:bg-slate-100 hover:text-school-blue-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Buttons (Dark Mode & Mobile Toggle) */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-school-yellow-400" /> : <Moon className="h-5 w-5 text-school-blue-900" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200/50 bg-white dark:border-slate-800/50 dark:bg-slate-900 overflow-hidden"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200
                    ${isActive 
                      ? "bg-school-blue-900 text-white dark:bg-school-blue-700" 
                      : "text-slate-700 hover:bg-slate-100 hover:text-school-blue-900 dark:text-slate-300 dark:hover:bg-slate-850 dark:hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
