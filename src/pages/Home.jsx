import React, { useState, useEffect } from 'react';
import { AlertTriangle, Megaphone, Info, Users, ArrowRight, Heart, Share2, Menu, X, ChevronDown } from 'lucide-react';

const JusticeForIko = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Navbar background change on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="font-bold text-white">!</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase text-white">Keadilan<span className="text-red-500">Iko</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Kronologi', 'Kejanggalan', 'Tuntutan', 'Aksi'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-widest relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-neutral-900 border-b border-red-900/30 p-4 flex flex-col gap-4 shadow-2xl">
            {['Kronologi', 'Kejanggalan', 'Tuntutan', 'Aksi'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left py-3 px-4 hover:bg-neutral-800 rounded text-red-100 font-medium border-l-2 border-transparent hover:border-red-500 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-800/50 text-red-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              Kasus Kematian Janggal
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              MENGAPA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">IKO JULIAN</span> <br />
              DIBUNUH?
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed border-l-4 border-red-600 pl-4">
              Mahasiswa Fakultas Hukum UNNES. Meninggal 31 Agustus 2025. Polisi menyebut kecelakaan, tubuhnya berkata lain.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('aksi')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center gap-2"
              >
                <Megaphone size={20} />
                SUARAKAN KEADILAN
              </button>
              <button 
                onClick={() => scrollToSection('kronologi')}
                className="px-8 py-4 bg-transparent border border-neutral-600 hover:border-white text-white font-bold rounded-sm transition-all flex items-center gap-2 group"
              >
                BACA KRONOLOGI
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Visual Representation */}
          <div className="relative h-[500px] flex items-center justify-center">
             <div className="relative w-full max-w-md aspect-[3/4] border-2 border-neutral-700 p-4 bg-neutral-800/50 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-red-600 z-20"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-red-600 z-20"></div>
                
                <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay group-hover:bg-red-900/10 transition-all"></div>
                  <Users size={64} className="text-neutral-600 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Iko Julian Junior</h3>
                  <p className="text-neutral-400 font-mono text-sm mb-6">FH UNNES - 2024</p>
                  <div className="w-full h-px bg-neutral-700 mb-6"></div>
                  <p className="text-red-500 font-bold text-xl font-serif italic">"Ampun Pak, jangan pukuli saya lagi..."</p>
                  <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest">Igauan Terakhir Korban</p>
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 animate-bounce cursor-pointer" onClick={() => scrollToSection('kronologi')}>
          <span className="text-xs uppercase tracking-widest">Scroll ke bawah</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Kronologi Section */}
      <section id="kronologi" className="py-24 bg-neutral-950 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black mb-6 text-white uppercase">Kronologi <span className="text-red-600">Kejadian</span></h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Runtutan peristiwa yang mengantarkan Iko pada kematiannya yang tragis. Sebuah perjalanan menjemput kawan yang berakhir duka.
              </p>
              <div className="p-6 bg-red-900/10 border border-red-900/30 rounded-lg">
                <AlertTriangle className="text-red-500 mb-3" />
                <h4 className="font-bold text-red-400 mb-2">Peringatan</h4>
                <p className="text-sm text-red-200/70">
                  Informasi berikut mengandung deskripsi kekerasan yang mungkin mengganggu kenyamanan Anda.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-neutral-800">
              {/* Timeline Item 1 */}
              <div className="relative pl-12 group">
                <div className="absolute left-1.5 top-2 w-5 h-5 bg-neutral-900 border-4 border-neutral-700 rounded-full group-hover:border-red-500 transition-colors z-10"></div>
                <h3 className="text-xl font-bold text-white mb-1">Sabtu Malam, 30 Agustus 2025</h3>
                <p className="text-neutral-400">
                  Iko berpamitan kepada keluarga. Informasi menyebutkan ia hendak menjemput/bersolidaritas terhadap kawan-kawan mahasiswa yang ditahan di Polda Jateng pasca aksi demonstrasi.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-12 group">
                <div className="absolute left-1.5 top-2 w-5 h-5 bg-neutral-900 border-4 border-neutral-700 rounded-full group-hover:border-red-500 transition-colors z-10"></div>
                <h3 className="text-xl font-bold text-white mb-1">Minggu Dini Hari, 31 Agustus 2025</h3>
                <p className="text-neutral-400">
                  Iko ditemukan dalam kondisi kritis. Polisi mengklaim menemukannya di Jalan Dr. Cipto / Jalan Veteran sebagai korban kecelakaan tunggal.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-12 group">
                <div className="absolute left-1.5 top-2 w-5 h-5 bg-neutral-900 border-4 border-neutral-700 rounded-full group-hover:border-red-500 transition-colors z-10"></div>
                <h3 className="text-xl font-bold text-white mb-1">Masa Kritis & Igauan</h3>
                <p className="text-neutral-400">
                  Saat dirawat, dalam kondisi setengah sadar/delirium, Iko terdengar mengigau berulang kali: <span className="text-red-400 italic font-semibold">"Ampun Pak, jangan pukuli saya lagi..."</span>
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-12 group">
                <div className="absolute left-1.5 top-2 w-5 h-5 bg-neutral-900 border-4 border-red-600 rounded-full group-hover:bg-red-600 transition-colors z-10"></div>
                <h3 className="text-xl font-bold text-white mb-1">Minggu Siang, 31 Agustus 2025</h3>
                <p className="text-neutral-400">
                  Iko Julian Junior dinyatakan meninggal dunia. Keluarga dan rekan-rekan mulai menemukan kejanggalan pada kondisi jenazah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kejanggalan / Evidence Section */}
      <section id="kejanggalan" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">Fakta vs <span className="text-red-600 line-through decoration-white decoration-4">Narasi</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Perbedaan mencolok antara klaim pihak kepolisian dan temuan fisik serta saksi di lapangan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Police Version */}
            <div className="bg-neutral-800 p-8 rounded-lg border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Info size={100} />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="text-sm bg-blue-900/50 px-2 py-1 rounded text-blue-200 uppercase tracking-wide">Versi Aparat</span>
                Kecelakaan Lalu Lintas
              </h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  Meninggal akibat laka lantas tunggal.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  Ditemukan tergeletak di jalan raya.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  Diantar oleh anggota Brimob ke RS (sebagai penolong).
                </li>
              </ul>
            </div>

            {/* Reality/Suspicion */}
            <div className="bg-neutral-800 p-8 rounded-lg border-l-4 border-red-600 relative overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.1)]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle size={100} />
              </div>
              <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
                <span className="text-sm bg-red-900/50 px-2 py-1 rounded text-red-200 uppercase tracking-wide">Temuan Lapangan</span>
                Dugaan Penganiayaan
              </h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">!</span>
                  <span><strong className="text-white">Luka Lebam Tidak Wajar:</strong> Terdapat luka lebam di wajah dan tubuh yang tidak sinkron dengan pola luka kecelakaan motor.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">!</span>
                  <span><strong className="text-white">Limpa Rusak:</strong> Dokter mengindikasikan kerusakan organ dalam (limpa) akibat benturan benda tumpul yang keras dan terfokus.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold mt-1">!</span>
                  <span><strong className="text-white">Igauan "Ampun Pak":</strong> Trauma psikologis korban di saat-saat terakhir mengindikasikan adanya penyiksaan oleh figur otoritas ("Pak").</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuntutan & Call to Action */}
      <section id="tuntutan" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diag-stripes-light.png')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
            Kami Menuntut <br />Keadilan!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded">
              <h4 className="text-xl font-bold text-white mb-2">Transparansi</h4>
              <p className="text-red-100 text-sm">Buka rekaman CCTV di sekitar lokasi kejadian tanpa rekayasa.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded">
              <h4 className="text-xl font-bold text-white mb-2">Investigasi Independen</h4>
              <p className="text-red-100 text-sm">Bentuk tim independen di luar kepolisian untuk mengusut kasus ini.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded">
              <h4 className="text-xl font-bold text-white mb-2">Adili Pelaku</h4>
              <p className="text-red-100 text-sm">Copot dan pidanakan oknum yang terlibat jika terbukti melakukan penganiayaan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag & Share Action Section */}
      <section id="aksi" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-2xl shadow-2xl">
              <Share2 size={48} className="mx-auto text-red-600 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Jangan Biarkan Iko Pergi Tanpa Keadilan</h3>
              <p className="text-neutral-400 mb-8">
                Bantu kami viralkan kasus ini. Gunakan tagar berikut di media sosialmu.
                Satu postinganmu adalah satu nyala lilin untuk menerangi kegelapan kasus ini.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['#JusticeForIko', '#BebaskanKawanKami', '#ACAB', '#PolisiPembunuh', '#UsutTuntas'].map((tag) => (
                  <div key={tag} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 rounded blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button 
                      onClick={() => {navigator.clipboard.writeText(tag)}}
                      className="relative px-6 py-3 bg-neutral-900 rounded leading-none flex items-center divide-x divide-neutral-600"
                    >
                      <span className="text-red-100 font-mono font-bold pr-4">{tag}</span>
                      <span className="pl-4 text-neutral-400 text-sm group-hover:text-white transition-colors">Copy</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-neutral-800 rounded border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-2">Salin pesan solidaritas:</p>
                <code className="block bg-neutral-950 p-4 rounded text-left text-green-400 font-mono text-xs md:text-sm overflow-x-auto whitespace-pre-wrap">
                  Kematian Iko Julian Junior bukan kecelakaan biasa. Ada luka lebam dan igauan ketakutan akan pukulan aparat. Kami menuntut keadilan! Buka CCTV, adili pelaku! Jangan ada lagi mahasiswa mati di tangan yang seharusnya melindungi. #JusticeForIko #BebaskanKawanKami #PolisiPembunuh
                </code>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 pt-16 pb-8 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Solidaritas<span className="text-red-600">Mahasiswa</span></h2>
              <p className="text-neutral-500 text-sm mt-2">Menolak Lupa, Menolak Tunduk.</p>
            </div>
            <div className="flex gap-6">
               <a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a>
               <a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter (X)</a>
               <a href="#" className="text-neutral-400 hover:text-white transition-colors">Kontak LBH</a>
            </div>
          </div>
          
          <div className="border-t border-neutral-900 pt-8 text-center text-neutral-600 text-sm flex flex-col gap-2">
            <p className="flex items-center justify-center gap-2">
              Dibuat dengan <Heart size={12} className="text-red-800 fill-red-800" /> dan amarah.
            </p>
            <p>Situs ini adalah bentuk solidaritas independen dan tidak berafiliasi resmi dengan institusi manapun.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JusticeForIko;