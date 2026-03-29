import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const GALLERY_HERO = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=75";
const GALLERY_FALLBACK = "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1920&q=75";

const categories = ["All", "Ceremonies", "Receptions", "Mehendi", "Candids", "Sangeet", "Muhurtham"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1594556218010-8a5a2a4a8b8b?w=600&q=75", alt: "Wedding ceremony", caption: "Sacred Vows", cat: "Ceremonies" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", alt: "Reception celebration", caption: "Grand Reception", cat: "Receptions" },
  { src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=75", alt: "Mehendi ceremony", caption: "Mehendi Art", cat: "Mehendi" },
  { src: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=600&q=75", alt: "Couple portrait", caption: "Couple Portrait", cat: "Candids" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=75", alt: "Family blessings", caption: "Family Blessings", cat: "Ceremonies" },
  { src: "https://images.unsplash.com/photo-1630514969818-94aefc6ba584?w=600&q=75", alt: "Reception dance", caption: "First Dance", cat: "Receptions" },
  { src: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=600&q=75", alt: "Sacred fire", caption: "Muhurtham", cat: "Muhurtham" },
  { src: "https://images.unsplash.com/photo-1620735692151-26a7e0748429?w=600&q=75", alt: "Wedding prep", caption: "Sangeet Night", cat: "Sangeet" },
  { src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=75", alt: "Mehendi details", caption: "Bridal Hands", cat: "Mehendi" },
  { src: "https://images.unsplash.com/photo-1594556218010-8a5a2a4a8b8b?w=600&q=75", alt: "Garland exchange", caption: "Garland Exchange", cat: "Muhurtham" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", alt: "Candid moment", caption: "Candid Joy", cat: "Candids" },
  { src: "https://images.unsplash.com/photo-1630514969818-94aefc6ba584?w=600&q=75", alt: "Sangeet performance", caption: "Sangeet Performance", cat: "Sangeet" },
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
