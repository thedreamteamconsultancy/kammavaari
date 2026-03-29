import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1920&q=75",
  "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=1920&q=75",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=75",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=75",
  "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?auto=format&fit=crop&w=1920&q=75",
];

const phrases = [
  "Within Your Community",
  "Connections That Last Forever",
  "Love Rooted in Tradition",
  "Your Perfect Life Partner",
  "A Bond Blessed by Elders",
];

const GoldParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 3 + Math.random() * 5,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left, top: p.top, width: p.size, height: p.size,
            background: 'hsl(var(--gold-500))',
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.15 + Math.random() * 0.2,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imgIdx, setImgIdx] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      const done = () => { loaded++; if (loaded >= HERO_IMAGES.length) setImagesReady(true); };
      img.onload = done;
      img.onerror = done;
    });
    const t = setTimeout(() => setImagesReady(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIdx(p => (p + 1) % phrases.length);
        setVisible(true);
      }, 460);
    }, 4200);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setImgVisible(false);
      setTimeout(() => {
        setImgIdx(p => (p + 1) % HERO_IMAGES.length);
        setImgVisible(true);
      }, 800);
    }, 6000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      {/* Image slideshow */}
      <div className="absolute inset-0" style={{ background: 'hsl(30 50% 4%)' }}>
        {!imagesReady && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'hsl(30 50% 4%)' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '2px solid rgba(201,168,76,0.15)',
              borderTopColor: 'rgba(201,168,76,0.6)',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        )}
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Indian wedding celebration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: imagesReady && i === imgIdx && imgVisible ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
              transform: i === imgIdx ? 'scale(1.05)' : 'scale(1)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '1.2s, 12s',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,10,5,0.75) 0%, rgba(15,10,5,0.3) 35%, rgba(15,10,5,0.35) 60%, rgba(15,10,5,0.85) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(15,10,5,0.55) 100%)' }} />

      <GoldParticles />

      {/* Main content — vertically centered with form and dots inside */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 3, padding: '0 clamp(16px, 5vw, 80px)' }}
      >
        <div className="w-full text-center" style={{ maxWidth: 'min(860px, 100%)' }}>
          <div className="flex items-center justify-center gap-3 mb-5" style={{ animation: 'fadeUp 0.8s var(--ease-luxury) 0.2s both' }}>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))', fontSize: '10px' }}>Kammavaari Community</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>

          <h1
            className="font-display font-light text-white"
            style={{
              fontSize: 'clamp(28px, 4.8vw, 72px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '4px',
              animation: 'fadeUp 0.8s var(--ease-luxury) 0.4s both',
              wordBreak: 'break-word',
            }}
          >
            Discover Meaningful
          </h1>

          <div
            className="overflow-hidden mb-5"
            style={{
              height: 'clamp(44px, 13vw, 92px)',
              minHeight: 'clamp(44px, 13vw, 92px)',
              animation: 'fadeUp 0.8s var(--ease-luxury) 0.6s both',
            }}
          >
            <h1
              className="font-accent"
              style={{
                fontSize: 'clamp(24px, 4.5vw, 68px)',
                lineHeight: 1.1,
                color: 'hsl(var(--gold-500))',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s var(--ease-luxury), transform 0.5s var(--ease-luxury)',
                wordBreak: 'break-word',
              }}
            >
              {phrases[phraseIdx]}
            </h1>
          </div>

          <p
            className="font-body font-light mx-auto mb-6"
            style={{
              fontSize: 'clamp(13px, 1.5vw, 17px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              maxWidth: '480px',
              padding: '0 clamp(8px, 3vw, 0px)',
              animation: 'fadeUp 0.8s var(--ease-luxury) 0.8s both',
            }}
          >
            Trusted by Kammavaari families across Andhra Pradesh,
            Telangana & beyond. 100% Verified. Personally Matchmade.
          </p>

          {/* Search form */}
          <div
            className="mx-auto"
            style={{
              maxWidth: 'min(820px, calc(100% - 32px))',
              width: '100%',
              position: 'relative',
              zIndex: 10,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'clamp(14px, 2vw, 20px)',
              padding: 'clamp(12px, 2vw, 20px)',
              animation: 'fadeUp 0.8s var(--ease-luxury) 1s both',
            }}
          >
            <p className="flex items-center justify-center gap-2 mb-3 font-body font-light" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
              <span style={{ color: 'hsl(var(--gold-500))' }}>✦</span>
              Your perfect match is just a search away
              <span style={{ color: 'hsl(var(--gold-500))' }}>✦</span>
            </p>

            <div className="search-grid grid gap-2 md:gap-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { placeholder: "I'm looking for", options: ["Bride", "Groom"] },
                { placeholder: "Age from", options: Array.from({ length: 43 }, (_, i) => String(18 + i)) },
                { placeholder: "Age to", options: Array.from({ length: 43 }, (_, i) => String(18 + i)) },
              ].map((sel, idx) => (
                <select
                  key={idx}
                  className="font-body font-light transition-all"
                  defaultValue=""
                  style={{
                    fontSize: '13px', height: '44px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '10px', color: 'white',
                    padding: '0 14px', outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.5)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                >
                  <option value="" disabled style={{ color: '#666' }}>{sel.placeholder}</option>
                  {sel.options.map(o => <option key={o} value={o} style={{ color: '#333' }}>{o}</option>)}
                </select>
              ))}

              <button
                className="font-body font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap"
                style={{
                  fontSize: '14px', height: '48px',
                  background: 'hsl(var(--gold-500))',
                  color: 'hsl(var(--ink-900))',
                  borderRadius: '10px', padding: '0 24px', border: 'none', cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'hsl(var(--gold-300))'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'hsl(var(--gold-500))'; }}
              >
                <Search className="w-4 h-4" />
                Let's Begin
              </button>
            </div>
          </div>

          {/* Slide indicator dots — inside the content block, below the form */}
          <div className="flex justify-center gap-2 mt-5" style={{ animation: 'fadeUp 0.8s var(--ease-luxury) 1.2s both' }}>
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setImgVisible(false); setTimeout(() => { setImgIdx(i); setImgVisible(true); }, 400); }}
                className="transition-all"
                style={{
                  width: i === imgIdx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  background: i === imgIdx ? 'hsl(var(--gold-500))' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 400ms ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
