import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import useSeo from './hooks/useSeo'
import Home from './pages/Home'
import Profil from './pages/Profil'
import ProgramStudiList from './pages/ProgramStudiList'
import ProgramStudiDetail from './pages/ProgramStudiDetail'
import Pimpinan from './pages/Pimpinan'
import DosenList from './pages/DosenList'
import DosenDetail from './pages/DosenDetail'
import BeritaList from './pages/BeritaList'
import BeritaDetail from './pages/BeritaDetail'
import FasilitasPage from './pages/FasilitasPage'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'

function Seo() {
  useSeo()
  return null
}

export default function App() {
  return (
    <HashRouter>
      <Seo />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="program-studi" element={<ProgramStudiList />} />
          <Route path="program-studi/:id" element={<ProgramStudiDetail />} />
          <Route path="pimpinan" element={<Pimpinan />} />
          <Route path="dosen" element={<DosenList />} />
          <Route path="dosen/:id" element={<DosenDetail />} />
          <Route path="berita" element={<BeritaList />} />
          <Route path="berita/:id" element={<BeritaDetail />} />
          <Route path="fasilitas" element={<FasilitasPage />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
