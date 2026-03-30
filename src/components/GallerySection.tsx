import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const galleryPreview = [
  { src: "https://i.pinimg.com/736x/e8/d1/a9/e8d1a9e54b2b6e5aa5e43a13ec4e8576.jpg", alt: "Traditional wedding ceremony", caption: "Sacred Vows" },
  { src: "https://cdn0.weddingwire.in/article/3427/original/1280/jpg/127243-golden-shutter-studio.jpeg", alt: "Grand reception celebration", caption: "Grand Reception" },
  { src: "https://i.pinimg.com/1200x/9e/7b/81/9e7b815120c303564fc3205be4bacd86.jpg", alt: "Mehendi art close-up", caption: "Mehendi Art" },
  { src: "https://i.pinimg.com/736x/d2/22/6f/d2226f65207174459f0f80ccc32c042e.jpg", alt: "Couple candid moment", caption: "Couple Portrait" },
  { src: "https://i.pinimg.com/736x/2c/dd/49/2cdd49db8d0212309863abfbfb98b324.jpg", alt: "Family blessings at ceremony", caption: "Family Blessings" },
  { src: "https://i.pinimg.com/736x/7f/76/21/7f76217aebc3af15bab86140a9ad9c76.jpg", alt: "Reception dance celebration", caption: "First Dance" },
  { src: "https://i.pinimg.com/736x/7a/82/52/7a8252022f3d1b0461088a17eaeda794.jpg", alt: "Sacred fire ritual", caption: "Muhurtham" },
  { src: "https://i.pinimg.com/1200x/39/35/84/3935844c7c004a22b7c5b07efa986e53.jpg", alt: "Sangeet night performance", caption: "Sangeet Night" },
  { src: "https://i.pinimg.com/1200x/f2/77/26/f27726df2645d4c0fd62cb8d59bee552.jpg", alt: "Bridal mehendi hands", caption: "Bridal Hands" },
  { src: "https://i.pinimg.com/1200x/fa/67/7f/fa677fb036bc9c22b696224c3fb0ea40.jpg", alt: "Garland exchange ceremony", caption: "Garland Exchange" },
  { src: "https://i.pinimg.com/1200x/05/f5/54/05f554937ea0367d048cda3be9a8fa81.jpg", alt: "Joyful candid moment", caption: "Candid Joy" },
  { src: "https://i.pinimg.com/1200x/50/f0/67/50f0672e3ed17ccc1703bc91a40e5f34.jpg", alt: "Sangeet group performance", caption: "Sangeet Performance" },
  { src: "https://i.pinimg.com/736x/aa/82/25/aa8225f3b316f9dde4fbbb9059289bb2.jpg", alt: "Wedding portrait", caption: "Wedding Portrait" },
  { src: "https://i.pinimg.com/1200x/e3/3e/5c/e33e5c4a608444b2dd0210796113dcad.jpg", alt: "Reception celebration night", caption: "Reception Night" },
  { src: "https://i.pinimg.com/1200x/8a/8a/66/8a8a6632ad1b4b54ef1f9b273a00cc2a.jpg", alt: "Mehendi celebration", caption: "Mehendi Celebration" },
  { src: "https://i.pinimg.com/1200x/41/7e/3c/417e3c7cac7159bb1b7fc23d54605a13.jpg", alt: "Sangeet dance night", caption: "Dance Night" },
  { src: "https://i.pinimg.com/736x/20/10/94/201094000a95d72820f7dbaee55456f9.jpg", alt: "Wedding couple at reception", caption: "Couple at Reception" },
  { src: "https://i.pinimg.com/736x/ff/f9/92/fff992f8730317b747f5955629b66031.jpg", alt: "Candid wedding moment", caption: "Pure Joy" },
  { src: "https://i.pinimg.com/736x/f2/9d/17/f29d17835bd27cea6321ba36e8094077.jpg", alt: "Traditional wedding celebration", caption: "Traditional Celebration" },
  { src: "https://i.pinimg.com/1200x/c9/62/af/c962af1118ca04572f1ceb86e6265492.jpg", alt: "Wedding blessings", caption: "Blessings" },
  { src: "https://i.pinimg.com/1200x/45/6a/8e/456a8e8787815c09608a6bf826de59de.jpg", alt: "Traditional wedding decor", caption: "Wedding Decor" },
  { src: "https://i.pinimg.com/1200x/29/49/da/2949dad98469777cadd18c3fea94e9f7.jpg", alt: "Bridal ceremony moments", caption: "Bridal Ceremony" },
  { src: "https://i.pinimg.com/736x/b6/c6/fe/b6c6fe9540ed4cce7c964ed2d0802d89.jpg", alt: "Couple at mandap", caption: "At the Mandap" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Speed in px/s
  const SPEED = 40;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!paused) {
        offsetRef.current += (SPEED * delta) / 1000;
        // Half width = one full set of images; reset seamlessly
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  // Duplicate images for seamless loop
  const items = [...galleryPreview, ...galleryPreview];

  const GalleryCard = ({ item, index, realIndex }: { item: typeof galleryPreview[0]; index: number; realIndex: number }) => (
    <div
      className="group relative overflow-hidden cursor-pointer flex-shrink-0"
      style={{
        width: 'clamp(180px, 22vw, 270px)',
        height: 'clamp(240px, 30vw, 360px)',
        borderRadius: '16px',
        transition: 'transform 0.4s cubic-bezier(0.25,0.1,0,1)',
        transform: hovered === index ? 'scale(1.03)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setLightbox(realIndex)}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered === index ? 'scale(1.1)' : 'scale(1)' }}
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex items-end"
        style={{
          background: 'linear-gradient(to top, rgba(15,10,5,0.8) 0%, rgba(15,10,5,0.2) 40%, transparent 70%)',
          opacity: hovered === index ? 1 : 0.6,
          transition: 'opacity 0.4s ease',
        }}
      >
        <div className="p-4 w-full">
          <p className="text-white font-display font-semibold text-[15px] sm:text-[17px]">{item.caption}</p>
          <div className="flex items-center gap-2 mt-1.5" style={{
            opacity: hovered === index ? 1 : 0,
            transform: hovered === index ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease',
          }}>
            <div className="w-5 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="font-body text-[10px] tracking-[0.08em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>View</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{
        border: '1.5px solid hsla(40,52%,54%,0.5)',
        opacity: hovered === index ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />
    </div>
  );

  return (
    <section className="section-padding" style={{ background: 'hsl(36 60% 96%)' }}>
      <div className="container mx-auto" style={{ maxWidth: '1100px' }}>
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Captured Moments</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: 'hsl(30 50% 4%)' }}>
              Wedding Gallery
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width marquee strip */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => { setTimeout(() => setPaused(false), 2000); }}
      >
        <div
          ref={trackRef}
          className="flex gap-3 sm:gap-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {items.map((item, i) => (
            <GalleryCard
              key={`${item.caption}-${i}`}
              item={item}
              index={i}
              realIndex={i % galleryPreview.length}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto" style={{ maxWidth: '1100px' }}>
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
          <div className="text-center mt-8 sm:mt-10">
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
