import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const GALLERY_HERO = "https://i.pinimg.com/1200x/c9/62/af/c962af1118ca04572f1ceb86e6265492.jpg";
const GALLERY_FALLBACK = "https://i.pinimg.com/1200x/e3/3e/5c/e33e5c4a608444b2dd0210796113dcad.jpg";

const categories = ["All", "Ceremonies", "Receptions", "Mehendi", "Candids", "Sangeet", "Muhurtham"];

const galleryItems = [
  { src: "https://i.pinimg.com/736x/e8/d1/a9/e8d1a9e54b2b6e5aa5e43a13ec4e8576.jpg", alt: "Traditional wedding ceremony", caption: "Sacred Vows", cat: "Ceremonies" },
  { src: "https://cdn0.weddingwire.in/article/3427/original/1280/jpg/127243-golden-shutter-studio.jpeg", alt: "Grand reception celebration", caption: "Grand Reception", cat: "Receptions" },
  { src: "https://i.pinimg.com/1200x/9e/7b/81/9e7b815120c303564fc3205be4bacd86.jpg", alt: "Mehendi art close-up", caption: "Mehendi Art", cat: "Mehendi" },
  { src: "https://i.pinimg.com/736x/d2/22/6f/d2226f65207174459f0f80ccc32c042e.jpg", alt: "Couple candid moment", caption: "Couple Portrait", cat: "Candids" },
  { src: "https://i.pinimg.com/736x/2c/dd/49/2cdd49db8d0212309863abfbfb98b324.jpg", alt: "Family blessings at ceremony", caption: "Family Blessings", cat: "Ceremonies" },
  { src: "https://i.pinimg.com/736x/7f/76/21/7f76217aebc3af15bab86140a9ad9c76.jpg", alt: "Reception dance celebration", caption: "First Dance", cat: "Receptions" },
  { src: "https://i.pinimg.com/736x/7a/82/52/7a8252022f3d1b0461088a17eaeda794.jpg", alt: "Sacred fire ritual", caption: "Muhurtham", cat: "Muhurtham" },
  { src: "https://i.pinimg.com/1200x/39/35/84/3935844c7c004a22b7c5b07efa986e53.jpg", alt: "Sangeet night performance", caption: "Sangeet Night", cat: "Sangeet" },
  { src: "https://i.pinimg.com/1200x/f2/77/26/f27726df2645d4c0fd62cb8d59bee552.jpg", alt: "Bridal mehendi hands", caption: "Bridal Hands", cat: "Mehendi" },
  { src: "https://i.pinimg.com/1200x/fa/67/7f/fa677fb036bc9c22b696224c3fb0ea40.jpg", alt: "Garland exchange ceremony", caption: "Garland Exchange", cat: "Muhurtham" },
  { src: "https://i.pinimg.com/1200x/05/f5/54/05f554937ea0367d048cda3be9a8fa81.jpg", alt: "Joyful candid moment", caption: "Candid Joy", cat: "Candids" },
  { src: "https://i.pinimg.com/1200x/50/f0/67/50f0672e3ed17ccc1703bc91a40e5f34.jpg", alt: "Sangeet group performance", caption: "Sangeet Performance", cat: "Sangeet" },
  { src: "https://i.pinimg.com/1200x/45/6a/8e/456a8e8787815c09608a6bf826de59de.jpg", alt: "Traditional wedding decor", caption: "Wedding Decor", cat: "Ceremonies" },
  { src: "https://i.pinimg.com/1200x/29/49/da/2949dad98469777cadd18c3fea94e9f7.jpg", alt: "Bridal ceremony moments", caption: "Bridal Ceremony", cat: "Ceremonies" },
  { src: "https://i.pinimg.com/736x/b6/c6/fe/b6c6fe9540ed4cce7c964ed2d0802d89.jpg", alt: "Couple at mandap", caption: "At the Mandap", cat: "Muhurtham" },
  { src: "https://i.pinimg.com/736x/aa/82/25/aa8225f3b316f9dde4fbbb9059289bb2.jpg", alt: "Wedding portrait", caption: "Wedding Portrait", cat: "Candids" },
  { src: "https://i.pinimg.com/1200x/e3/3e/5c/e33e5c4a608444b2dd0210796113dcad.jpg", alt: "Reception celebration night", caption: "Reception Night", cat: "Receptions" },
  { src: "https://i.pinimg.com/1200x/8a/8a/66/8a8a6632ad1b4b54ef1f9b273a00cc2a.jpg", alt: "Mehendi celebration", caption: "Mehendi Celebration", cat: "Mehendi" },
  { src: "https://i.pinimg.com/1200x/41/7e/3c/417e3c7cac7159bb1b7fc23d54605a13.jpg", alt: "Sangeet dance night", caption: "Dance Night", cat: "Sangeet" },
  { src: "https://i.pinimg.com/736x/20/10/94/201094000a95d72820f7dbaee55456f9.jpg", alt: "Wedding couple at reception", caption: "Couple at Reception", cat: "Receptions" },
  { src: "https://i.pinimg.com/736x/ff/f9/92/fff992f8730317b747f5955629b66031.jpg", alt: "Candid wedding moment", caption: "Pure Joy", cat: "Candids" },
  { src: "https://i.pinimg.com/736x/f2/9d/17/f29d17835bd27cea6321ba36e8094077.jpg", alt: "Traditional wedding celebration", caption: "Traditional Celebration", cat: "Ceremonies" },
  { src: "https://i.pinimg.com/1200x/c9/62/af/c962af1118ca04572f1ceb86e6265492.jpg", alt: "Wedding blessings", caption: "Blessings", cat: "Ceremonies" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? galleryItems : galleryItems.filter(g => g.cat === filter);

  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % filtered.length : null));

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center pt-14 overflow-hidden" style={{ height: '50vh', minHeight: '320px' }}>
        <div className="absolute inset-0">
          <img
            src={GALLERY_HERO} alt="" className="w-full h-full object-cover" loading="eager"
            onError={(e) => { const el = e.currentTarget; if (!el.dataset.fallbackUsed) { el.dataset.fallbackUsed = 'true'; el.src = GALLERY_FALLBACK; } }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,10,5,0.5) 0%, rgba(15,10,5,0.15) 35%, rgba(15,10,5,0.7) 70%, rgba(15,10,5,0.9) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15,10,5,0.6) 100%)' }} />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
              <span className="eyebrow" style={{ color: '#C9A84C' }}>CAPTURED MOMENTS</span>
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
            </div>
            <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(44px, 7vw, 96px)', letterSpacing: '-0.02em' }}>
              <span className="font-light text-white">Wedding </span>
              <span className="font-semibold italic" style={{ color: '#C9A84C' }}>Gallery</span>
            </h1>
            <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Beautiful moments from weddings made possible by Kammavaari Matrimony
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter tabs + Grid */}
      <section className="section-padding" style={{ background: '#FFFDF8' }}>
        <div className="container mx-auto">
          <div className="sticky top-[72px] z-50 -mx-4 px-4 py-3 mb-10" style={{
            background: 'rgba(255,253,248,0.85)',
            backdropFilter: 'blur(16px) saturate(180%)',
            borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}>
            <div className="flex flex-nowrap justify-start md:justify-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' as any }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="font-body text-[12px] font-medium transition-all whitespace-nowrap shrink-0"
                  style={{
                    padding: '7px 18px',
                    borderRadius: '999px',
                    border: filter === cat ? 'none' : '1px solid rgba(201,168,76,0.25)',
                    background: filter === cat ? '#C9A84C' : 'transparent',
                    color: filter === cat ? '#0F0A05' : '#7A6550',
                    cursor: 'pointer',
                    boxShadow: filter === cat ? '0 2px 12px rgba(201,168,76,0.3)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.caption + filter + i} delay={i * 60}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden aspect-square w-full block focus:outline-none"
                  style={{ borderRadius: '16px' }}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(45,10,10,0.55)' }}
                  >
                    <span className="font-body font-medium text-[14px] text-white">View Story</span>
                    <div className="w-8 h-[1px] mt-2 transition-all duration-300 scale-x-0 group-hover:scale-x-100" style={{ background: '#C9A84C' }} />
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-body text-[10px] px-2.5 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.9)', color: '#0F0A05' }}>{item.cat}</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: 'rgba(15,10,5,0.92)', backdropFilter: 'blur(12px)' }} onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10" aria-label="Close"><X className="w-8 h-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10" style={{ background: 'rgba(255,255,255,0.1)' }} aria-label="Previous"><ChevronLeft className="w-6 h-6 text-white" /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10" style={{ background: 'rgba(255,255,255,0.1)' }} aria-label="Next"><ChevronRight className="w-6 h-6 text-white" /></button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[85vh] relative">
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <p className="text-center text-white/80 font-display font-semibold mt-3 text-[18px]">{filtered[lightbox].caption}</p>
            <p className="text-center text-white/40 font-body font-light text-[12px] mt-0.5">{lightbox + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
