import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import GuruStaf from "./pages/GuruStaf";
import Fasilitas from "./pages/Fasilitas";
import Prestasi from "./pages/Prestasi";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import Galeri from "./pages/Galeri";
import PPDB from "./pages/PPDB";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/guru-staf" element={<GuruStaf />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/prestasi" element={<Prestasi />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<DetailBerita />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
