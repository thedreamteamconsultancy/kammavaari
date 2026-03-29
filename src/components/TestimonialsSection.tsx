import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    names: "Hemanth & Sai Nikitha",
    detail: "Married · Hyderabad",
    initials: ["H", "S"],
    quote: "I got connected to my life partner on Kammavaari.com and within a couple of weeks our conversation started. We were very much comfortable. Kammavaari is the best Kamma Matrimony site.",
    image: "https://res.cloudinary.com/djlrarljg/image/upload/v1774790730/marriage_3_jkyvjh.jpg",
  },
  {
    names: "Priya & Aakash",
    detail: "Married · Vijayawada",
    initials: ["P", "A"],
    quote: "My parents registered my profile on Kammavaari.com. We received enormous prospect match leads within no time. We chose the best one. Thanks to Kammavaari.com",
    image: "https://res.cloudinary.com/djlrarljg/image/upload/v1774790731/couple18_viwfhj.jpg",
  },
  {
    names: "Divya & Karthik",
    detail: "Married · Guntur",
    initials: ["D", "K"],
    quote: "It all started when I received an invite from her on the Kammavaari.com Matrimony portal. I went through her profile and liked everything about her. Thanks to Kammavaari.com",
    image: "https://res.cloudinary.com/djlrarljg/image/upload/v1774790731/couple17_z2qhxe.jpg",
  },
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=70";

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const goTo = useCallback((index: number) => setActive(index), []);
  const next = useCallback(() => setActive(prev => (prev + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const diff = index - active;
    const actualDiff = (() => {
      if (diff === 0) return 0;
      if (Math.abs(diff) === 1) return diff;
      if (diff === 2) return -1;
      if (diff === -2) return 1;
      return diff;
    })();

    if (actualDiff === 0) return { transform: 'translateX(-50%) perspective(1200px) rotateY(0deg) scale(1)', opacity: 1, zIndex: 10, filter: 'brightness(1)' };
    if (actualDiff === 1) return { transform: 'translateX(calc(-50% + 65%)) perspective(1200px) rotateY(-35deg) scale(0.78)', opacity: 0.5, zIndex: 5, filter: 'brightness(0.5)' };
    if (actualDiff === -1) return { transform: 'translateX(calc(-50% - 65%)) perspective(1200px) rotateY(35deg) scale(0.78)', opacity: 0.5, zIndex: 5, filter: 'brightness(0.5)' };
    return { transform: 'translateX(-50%) perspective(1200px) rotateY(0deg) scale(0.6)', opacity: 0, zIndex: 0, filter: 'brightness(0.3)' };
  };

  return (
    <section className="relative overflow-hidden" style={{ background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at center, hsla(40,52%,54%,0.06) 0%, transparent 70%)' }} />

      <div className="relative text-center" style={{ padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,24px) clamp(24px,4vw,40px)', zIndex: 1 }}>
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>LOVE STORIES</span>
            <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}>
            Stories That{" "}
            <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>Inspire</span>
          </h2>
          <p className="font-accent mt-2" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)' }}>
            Real couples who found their forever with us
          </p>
        </ScrollReveal>
      </div>

      {/* 3D Carousel */}
      <div className="relative mx-auto flex items-center justify-center" style={{ maxWidth: '1000px', height: 'clamp(400px, 55vw, 520px)', perspective: '1200px', zIndex: 1 }}>
        {testimonials.map((t, i) => {
          const styles = getCardStyle(i);
          const isHovered = hovered === i && i === active;
          return (
            <div
              key={t.names}
              className="absolute overflow-hidden cursor-pointer"
              style={{
                width: 'clamp(300px, 70vw, 480px)',
                height: '100%',
                borderRadius: '24px',
                left: '50%',
                transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0, 1)',
                transformStyle: 'preserve-3d',
                ...styles,
              }}
              onClick={() => { if (i !== active) goTo(i); }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={t.image}
                alt={t.names}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0, 1), filter 0.8s ease',
                  transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                  filter: isHovered ? 'brightness(0.75) saturate(1.1)' : 'brightness(0.4) saturate(0.9)',
                }}
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.dataset.fallbackUsed) { el.dataset.fallbackUsed = 'true'; el.src = FALLBACK_IMG; }
                }}
              />

              {/* Dark overlay — cinematic reveal on hover */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to top, rgba(10,5,2,0.95) 0%, rgba(10,5,2,0.6) 40%, rgba(10,5,2,0.2) 70%, transparent 100%)',
                opacity: isHovered ? 0.15 : 1,
                transition: 'opacity 0.7s ease',
              }} />

              {/* Left gold accent */}
              <div className="absolute top-0 left-0 w-[3px] h-full pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--gold-500)) 30%, hsl(var(--gold-500)) 70%, transparent)' }} />

              {/* Stars */}
              <div className="absolute top-6 left-6 flex gap-1" style={{ zIndex: 3 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                ))}
              </div>

              {/* Content — always-readable gradient bg */}
              <div className="absolute bottom-0 left-0 right-0" style={{
                zIndex: 2,
                background: 'linear-gradient(to top, rgba(10,5,2,0.95) 0%, rgba(10,5,2,0.7) 60%, transparent 100%)',
                padding: '28px 24px 24px',
              }}>
                <span className="block font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'hsla(40,52%,54%,0.25)', lineHeight: 0.9 }}>"</span>
                <p className="font-accent" style={{
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.6,
                  marginTop: '-4px',
                  fontStyle: 'italic',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="flex -space-x-3">
                    {t.initials.map((init, idx) => (
                      <div key={idx} className="w-9 h-9 rounded-full flex items-center justify-center font-display text-[14px] font-semibold" style={{
                        background: idx === 0 ? 'linear-gradient(135deg, hsl(var(--maroon-700)), hsl(var(--maroon-900)))' : 'linear-gradient(135deg, hsl(var(--gold-700)), hsl(var(--gold-900)))',
                        border: '2px solid hsl(var(--gold-500))',
                        color: 'hsl(var(--gold-300))',
                      }}>
                        {init}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[15px] text-white">{t.names}</p>
                    <p className="font-body font-light text-[11px]" style={{ letterSpacing: '0.06em', color: 'hsla(40,52%,54%,0.65)' }}>
                      {t.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all"
          style={{ left: 'clamp(8px, 3vw, 40px)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15,10,5,0.6)', border: '1px solid hsla(40,52%,54%,0.3)', backdropFilter: 'blur(8px)', cursor: 'pointer', color: '#C9A84C' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,10,5,0.6)'; }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all"
          style={{ right: 'clamp(8px, 3vw, 40px)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15,10,5,0.6)', border: '1px solid hsla(40,52%,54%,0.3)', backdropFilter: 'blur(8px)', cursor: 'pointer', color: '#C9A84C' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,10,5,0.6)'; }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 relative" style={{ padding: '24px 0', zIndex: 1 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ width: active === i ? '28px' : '8px', height: '8px', borderRadius: '999px', background: active === i ? '#C9A84C' : 'rgba(201,168,76,0.25)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 300ms ease' }}
            aria-label={`Go to story ${i + 1}`}
          />
        ))}
      </div>

      <div className="text-center relative" style={{ padding: 'clamp(12px,3vw,32px) 24px clamp(40px,6vw,64px)', zIndex: 1 }}>
        <p className="font-body font-light mb-5" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
          Join 50,000+ families who found their match
        </p>
        <a
          href="#"
          className="inline-block font-body transition-all"
          style={{ fontSize: '13px', fontWeight: 400, letterSpacing: '0.06em', color: 'hsl(var(--gold-500))', border: '1px solid hsla(40,52%,54%,0.35)', borderRadius: '999px', padding: '12px 32px' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'hsla(40,52%,54%,0.08)'; e.currentTarget.style.borderColor = 'hsl(var(--gold-500))'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.35)'; }}
        >
          Read More Success Stories →
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
