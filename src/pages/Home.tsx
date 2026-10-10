import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Building2, Cog, Cpu, GraduationCap, Users, Trophy, BookOpen } from 'lucide-react'
import CarouselDosen from '../components/CarouselDosen'
import FotoOrang from '../components/ui/FotoOrang'
import { fakultas, programStudi } from '../data/fakultas'
import { dosen, pimpinan } from '../data/orang'
import { berita, fasilitas, statistik } from '../data/konten'
import { namaLengkap } from '../data/namaLengkap'

const icons = [Building2, Cog, Cpu]
const statIcons = [BookOpen, Users, GraduationCap, Trophy]

export default function Home() {
  return <div className="home-page">
    <section className="hero">
      <img className="hero-photo" src={`${import.meta.env.BASE_URL}engineering-building.jpg`} alt="Ilustrasi arsitektur gedung modern, bukan gedung Universitas Asahan" fetchPriority="high" />
      <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
      <div className="home-container hero-content">
        <div className="eyebrow"><span /> FAKULTAS TEKNIK · UNIVERSITAS ASAHAN</div>
        <h1><span className="sr-only">FAKULTAS TEKNIK UNIVERSITAS ASAHAN. </span>Rekayasa hari ini.<br />Bangun <span>masa depan.</span></h1>
        <p>Temukan ruang untuk bertumbuh, berinovasi, dan berkarya.<br className="hidden sm:block" /> Jelajahi dunia teknik bersama Fakultas Teknik<br className="hidden sm:block" /> Universitas Asahan.</p>
        <div className="hero-actions"><Link className="primary-link" to="/program-studi">Jelajahi Program Studi <ArrowUpRight size={18} /></Link><Link className="outline-link" to="/profil">Kenali Fakultas <ArrowRight size={17} /></Link></div>
        <div className="hero-footnote">+ &nbsp; PENDIDIKAN · PENELITIAN · PENGABDIAN</div>
      </div>
      <div className="image-caption">01 / PERSPEKTIF REKAYASA <span>Foto ilustrasi · bukan kampus UNA</span></div>
    </section>
    <section className="stat-strip" aria-label="Fakultas dalam angka"><div className="home-container stat-grid">{statistik.map((s, i) => { const Icon = statIcons[i]; return <div className="stat" key={s.label}><Icon size={25} strokeWidth={1.4} /><div><strong>{s.value === '[—]' ? '—' : '0' + s.value}</strong><span>{s.label}</span><small>{s.catatan}</small></div></div> })}</div></section>
    <section className="home-section programs-section"><div className="home-container">
      <div className="section-heading"><div><p className="section-kicker">TEMUKAN ARAHMU</p><h2>Tiga disiplin. Tak terbatas kemungkinan.</h2><p>Pilih bidangmu. Mulai langkah untuk menghadirkan perubahan.</p></div><Link className="text-link" to="/program-studi">Semua program studi <ArrowUpRight size={17} /></Link></div>
      <div className="program-grid">{programStudi.map((p, i) => { const Icon = icons[i]; return <Link className="program-card" to={`/program-studi/${p.id}`} key={p.id}><div className="program-card-top"><span className="program-icon"><Icon size={28} strokeWidth={1.5} /></span><span className="program-number">0{i + 1}</span></div><div className="program-drawing" aria-hidden="true"><Icon strokeWidth={0.6} /></div><span className="program-label">PROGRAM STUDI</span><h3>{p.nama}</h3><p>{p.tagline}</p><div className="program-card-bottom">Jelajahi program <span><ArrowUpRight size={18} /></span></div></Link> })}</div>
      <p className="data-note">Informasi bidang keilmuan bersifat umum. Kurikulum dan data resmi menunggu verifikasi.</p>
    </div></section>
    <section className="home-section intro-section"><div className="home-container intro-grid"><div><p className="section-kicker">MENGENAL FAKULTAS</p><h2>Ilmu yang berkembang.<br />Karya yang berdampak.</h2><p>Teknik Sipil, Teknik Mesin, dan Teknik Informatika. Tiga perspektif keilmuan dalam satu lingkungan Fakultas Teknik Universitas Asahan.</p><Link to="/profil" className="text-link">Lebih dekat dengan fakultas <ArrowUpRight size={18} /></Link></div><div className="vision-panel"><span className="section-kicker">ARAH & TUJUAN</span><h3>Visi & Misi Fakultas</h3><p>{fakultas.visi}</p><details><summary>Lihat misi fakultas</summary><ul>{fakultas.misi.map(m => <li key={m}>{m}</li>)}</ul></details></div></div></section>
    <section className="home-section"><div className="home-container"><div className="section-heading"><div><p className="section-kicker">ORANG DI BALIK GAGASAN</p><h2>Bertumbuh bersama para pendidik.</h2><p>Kenali dosen dan bidang keilmuan di Fakultas Teknik.</p></div></div><p className="data-note mb-6">Profil contoh · identitas, gelar, dan foto dosen menunggu data resmi.</p><CarouselDosen orang={dosen} /></div></section>
    <section className="home-section leadership-section"><div className="home-container"><div className="section-heading"><div><p className="section-kicker">KEPEMIMPINAN AKADEMIK</p><h2>Pimpinan Fakultas</h2></div><Link to="/pimpinan" className="text-link">Seluruh pimpinan <ArrowUpRight size={17} /></Link></div><div className="leader-grid">{pimpinan.slice(0, 2).map(o => <Link className="leader-card" key={o.id} to={`/dosen/${o.id}`}><div className="leader-photo"><FotoOrang orang={o} /></div><div><span className="section-kicker">{o.jabatan}</span><h3>{namaLengkap(o)}</h3><p>Profil menunggu data resmi</p></div><ArrowUpRight size={21} /></Link>)}</div></div></section>
    <section className="home-section"><div className="home-container"><div className="section-heading"><div><p className="section-kicker">KABAR DARI FAKULTAS</p><h2>Wawasan, kegiatan, dan cerita terbaru.</h2><p>Konten demonstrasi · bukan berita atau pengumuman resmi.</p></div><Link to="/berita" className="text-link">Semua berita <ArrowUpRight size={17} /></Link></div><div className="news-grid">{[...berita].sort((a,b) => b.tanggal.localeCompare(a.tanggal)).slice(0,3).map(b => <article className="news-card" key={b.id}><Link to={`/berita/${b.id}`}><img src={b.gambar} alt="Foto ilustrasi kegiatan akademik, bukan dokumentasi UNA" loading="lazy" width="600" height="360" /></Link><div className="news-meta"><span>{b.kategori}</span><time dateTime={b.tanggal}>{new Date(b.tanggal).toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'})}</time></div><h3><Link to={`/berita/${b.id}`}>{b.judul}</Link></h3><p>{b.ringkasan}</p><Link className="text-link" to={`/berita/${b.id}`}>Baca cerita <ArrowUpRight size={16} /></Link></article>)}</div></div></section>
    <section className="home-section facility-section"><div className="home-container"><div className="section-heading"><div><p className="section-kicker">RUANG UNTUK BEREKSPLORASI</p><h2>Dari gagasan menuju pengalaman.</h2><p>Fasilitas berikut merupakan placeholder; ketersediaan belum terverifikasi.</p></div><Link to="/fasilitas" className="text-link">Jelajahi fasilitas <ArrowUpRight size={17} /></Link></div><div className="facility-grid">{fasilitas.slice(0,3).map((f,i) => <Link to="/fasilitas" className="facility-card" key={f.id}><span>0{i+1} / PLACEHOLDER</span><h3>{f.nama}</h3><ArrowUpRight size={23} /></Link>)}</div><div className="activity-banner"><div><p className="section-kicker">KEHIDUPAN MAHASISWA</p><h3>Ruang berkarya di luar kelas.</h3><p>[Data organisasi, seminar, kompetisi, dan prestasi mahasiswa menunggu verifikasi resmi]</p></div><Link to="/berita?kategori=Prestasi" className="outline-link">Kegiatan & prestasi <ArrowUpRight size={18} /></Link></div></div></section>
    <div className="publication-note">Situs pengembangan Fakultas Teknik UNA. Data institusional berlabel placeholder menunggu verifikasi resmi.</div>
  </div>
}
