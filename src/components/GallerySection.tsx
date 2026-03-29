import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryPreview = [
  { src: gallery1, alt: "Garland exchange ceremony", caption: "Garland Ceremony" },
  { src: gallery2, alt: "Wedding reception dance", caption: "Reception Dance" },
  { src: gallery3, alt: "Bridal mehendi art", caption: "Mehendi Art" },
  { src: gallery4, alt: "Couple portrait at mandap", caption: "Couple Portrait" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: 'hsl(36 60% 96%)' }}>
      <div className="container mx-auto" style={{ maxWidth: '1100px' }}>
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Captured Moments</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'hsl(30 50% 4%)' }}>
              Wedding Gallery
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll strip with hover zoom */}
        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' as any, scrollSnapType: 'x mandatory' }}>
          {galleryPreview.map((item, i) => (
            <ScrollReveal key={item.caption} delay={i * 100}>
              <div
                className="group relative overflow-hidden cursor-pointer flex-shrink-0"
                style={{
                  width: 'clamp(240px, 24vw, 280px)',
                  height: 'clamp(300px, 32vw, 380px)',
                  borderRadius: '20px',
                  scrollSnapAlign: 'start',
                  transition: 'all 0.5s cubic-bezier(0.25,0.1,0,1)',
                  transform: hovered === i ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hovered === i ? 'scale(1.1)' : 'scale(1)' }}
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-end transition-opacity duration-400"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,10,5,0.8) 0%, rgba(15,10,5,0.2) 40%, transparent 70%)',
                    opacity: hovered === i ? 1 : 0.6,
                  }}
                >
                  <div className="p-5 w-full">
                    <p className="text-white font-display font-semibold text-[18px]">{item.caption}</p>
                    <div className="flex items-center gap-2 mt-2 transition-all" style={{
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'all 0.3s ease',
                    }}>
                      <div className="w-5 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
                      <span className="font-body text-[11px] tracking-[0.08em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>View</span>
                    </div>
                  </div>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-400" style={{
                  border: '1.5px solid hsla(40,52%,54%,0.5)',
                  opacity: hovered === i ? 1 : 0,
                }} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(15,10,5,0.95)', backdropFilter: 'blur(20px)' }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryPreview.length) % galleryPreview.length); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryPreview.length); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <img
              src={galleryPreview[lightbox].src}
              alt={galleryPreview[lightbox].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain"
              style={{ borderRadius: '16px' }}
              onClick={e => e.stopPropagation()}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display font-semibold text-white text-[20px]">
              {galleryPreview[lightbox].caption}
            </p>
          </div>
        )}

        <ScrollReveal delay={300}>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body font-medium text-[13px] transition-all"
              style={{
                border: '1px solid hsl(40 52% 54%)',
                color: 'hsl(40 58% 38%)',
                padding: '12px 28px',
                borderRadius: '9999px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'hsl(40 52% 54%)'; e.currentTarget.style.color = 'hsl(30 50% 4%)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'hsl(40 58% 38%)'; }}
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
