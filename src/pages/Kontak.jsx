import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolInfo } from "../data/schoolData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Nama wajib diisi";
    if (!formData.subject.trim()) formErrors.subject = "Subjek wajib diisi";
    if (!formData.message.trim()) formErrors.message = "Pesan wajib diisi";
    
    // Check at least one contact channel (email or phone) is provided
    if (!formData.email.trim() && !formData.phone.trim()) {
      formErrors.contact = "Mohon isi Email atau No. WhatsApp agar kami bisa menghubungi Anda kembali";
    }
    
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Mock sending message
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      // Hide success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-school-blue-900 dark:bg-slate-950 text-white py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
            alt="Hubungi Kami" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-display">Hubungi Kami</h1>
          <p className="mt-4 text-base sm:text-lg text-blue-200">
            Ada pertanyaan? Silakan hubungi kami atau kunjungi langsung alamat kantor SDN Wonokromo III.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Details Info */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              Informasi Kontak
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Anda dapat terhubung langsung dengan bagian administrasi, panitia PPDB, atau humas sekolah melalui saluran kontak resmi di bawah ini.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { 
                  icon: MapPin, 
                  title: "Alamat Sekolah", 
                  desc: schoolInfo.address, 
                  color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400" 
                },
                { 
                  icon: Phone, 
                  title: "Telepon / Fax", 
                  desc: schoolInfo.phone, 
                  color: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400" 
                },
                { 
                  icon: Mail, 
                  title: "Email Resmi", 
                  desc: schoolInfo.email, 
                  color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" 
                },
                { 
                  icon: Clock, 
                  title: "Jam Operasional", 
                  desc: schoolInfo.workingHours, 
                  color: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400" 
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 p-5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl shadow-sm"
                  >
                    <div className={`p-3.5 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center ${item.color}`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-350 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-6">
              Kirim Pesan Ke Sekolah
            </h2>
            
            {/* Success notification banner */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-350 flex gap-3 items-center"
                >
                  <CheckCircle className="h-5.5 w-5.5 text-emerald-500" />
                  <span className="text-sm font-semibold">Pesan Anda berhasil terkirim. Terima kasih atas tanggapannya!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Validation errors banner */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-250 text-rose-900 dark:bg-rose-950/20 dark:border-rose-900/50 dark:text-rose-350 flex gap-3 items-start">
                <AlertCircle className="h-5.5 w-5.5 text-rose-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">Gagal mengirim pesan:</p>
                  <ul className="list-disc pl-5 mt-1">
                    {Object.values(errors).map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-750 dark:bg-slate-900 dark:text-white dark:focus:border-school-blue-700"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">No. WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789"
                    className="px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-750 dark:bg-slate-900 dark:text-white dark:focus:border-school-blue-700"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Contoh: nama@domain.com"
                  className="px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-750 dark:bg-slate-900 dark:text-white dark:focus:border-school-blue-700"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Subjek Pesan *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Contoh: Pertanyaan Syarat Pendaftaran PPDB"
                  className="px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-750 dark:bg-slate-900 dark:text-white dark:focus:border-school-blue-700"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Isi Pesan *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-school-blue-900 focus:ring-1 focus:ring-school-blue-900 dark:border-slate-750 dark:bg-slate-900 dark:text-white dark:focus:border-school-blue-700 resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center rounded-xl bg-school-blue-900 text-white dark:bg-school-blue-700 px-6 py-3.5 text-sm font-bold shadow-md hover:bg-school-blue-800 dark:hover:bg-school-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Mengirimkan...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4.5 w-4.5" />
                    Kirim Pesan
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[450px] bg-slate-200 dark:bg-slate-800 relative transition-colors duration-300">
        <iframe
          src={schoolInfo.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi SDN Wonokromo III Surabaya"
          className="grayscale dark:invert opacity-85 hover:grayscale-0 dark:hover:invert-0 hover:opacity-100 transition-all duration-300"
        ></iframe>
      </section>
    </div>
  );
}
