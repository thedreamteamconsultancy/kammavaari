import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Users, ShieldCheck, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ABOUT_HERO = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=75";
const ABOUT_FALLBACK = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=75";
const STORY_IMG = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80";
const CHAIRMAN_IMG = "https://res.cloudinary.com/djlrarljg/image/upload/v1774790524/1_gyolvt.jpg";

const stats = [
  { icon: Heart, value: 10000, suffix: "+", label: "Happy Matches" },
  { icon: Clock, value: 15, suffix: "+", label: "Years of Trust" },
  { icon: Users, value: 50000, suffix: "+", label: "Active Profiles" },
  { icon: ShieldCheck, value: 0, suffix: "No.1", label: "Community Portal" },
];

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) { setStarted(true); obs.unobserve(el); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || target === 0) return;
    const dur = 2000;
    const t0 = performance.now();
    const go = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.floor(easeOut(p) * target));
      if (p < 1) requestAnimationFrame(go);
    };
    requestAnimationFrame(go);
  }, [started, target]);

  return <span ref={ref}>{target === 0 ? suffix : `${count.toLocaleString()}${suffix}`}</span>;
};

const valueImages = [
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=70",
  "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=600&q=70",
  "https://images.unsplash.com/photo-1583939411023-14783179e581?w=600&q=70",
  "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=70",
];

const values = [
  { icon: "♡", title: "Community First", body: "Every match honors the traditions and values that define the Kammavaari community." },
  { icon: "◈", title: "Complete Privacy", body: "Your profile, photos and contact details are shared only with your explicit permission." },
  { icon: "★", title: "Verified Profiles", body: "Every profile is manually reviewed. We believe quality matters more than quantity." },
  { icon: "◎", title: "Family-Centered", body: "We understand that in our culture, marriage is a union of two families — not just two people." },
];

const AboutUs = () => (
  <div className="min-h-screen">
    <Header />

    {/* Hero */}
    <section className="relative flex items-center justify-center pt-14 overflow-hidden" style={{ height: '60vh', minHeight: '360px' }}>
      <div className="absolute inset-0">
        <img
          src={ABOUT_HERO} alt="About Kammavaari Matrimony" className="w-full h-full object-cover"
          style={{ animation: 'kenburns 20s ease-in-out infinite alternate' }} loading="eager"
          onError={(e) => { const el = e.currentTarget; if (!el.dataset.fallbackUsed) { el.dataset.fallbackUsed = 'true'; el.src = ABOUT_FALLBACK; } }}
        />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,10,5,0.5) 0%, rgba(15,10,5,0.15) 35%, rgba(15,10,5,0.7) 70%, rgba(15,10,5,0.9) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15,10,5,0.6) 100%)' }} />
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-9 h-[1px]" style={{ background: '#C9A84C' }} />
            <span className="eyebrow" style={{ color: '#C9A84C' }}>OUR LEGACY</span>
            <div className="w-9 h-[1px]" style={{ background: '#C9A84C' }} />
          </div>
          <h1 className="font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.02em' }}>
            15 Years of Trust.
            <br />
            <span className="font-display font-semibold italic" style={{ color: '#C9A84C' }}>15 Years of Excellence.</span>
          </h1>
          <p className="font-accent text-[17px] mt-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Connecting Kammavaari hearts since 2009</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding overflow-hidden" style={{ background: '#FFFDF8' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
                <span className="eyebrow" style={{ color: '#7A6550' }}>OUR JOURNEY</span>
              </div>
              <h2 className="font-display font-light mb-2" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', color: '#0F0A05', letterSpacing: '-0.02em' }}>
                From Publications to
              </h2>
              <h2 className="font-display font-semibold italic mb-6" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', color: '#9B7A2A', letterSpacing: '-0.02em' }}>
                India's No.1 Community Portal
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4 font-body font-light text-[15px] leading-[1.85]" style={{ color: '#7A6550' }}>
                <p>We started <strong style={{ color: '#0F0A05' }}>Kamma Vijayam Publications</strong> in 2009, publishing biographies and inspirational stories of elite leaders and eminent entrepreneurs of the Kamma Community.</p>
                <p>With deep roots across <strong style={{ color: '#0F0A05' }}>Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Karnataka,</strong> and abroad, we transitioned into offline matchmaking. The response was overwhelming.</p>
                <p>In 2016, we officially launched <strong style={{ color: '#C9A84C' }}>Kammavaari.com</strong> to connect thousands of families globally. Today, we proudly stand at the <strong style={{ color: '#C9A84C' }}>No. 1 position</strong> among community-based marriage portals.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-3.5 rounded-3xl" style={{ border: '1px solid rgba(201,168,76,0.3)', zIndex: 0 }} />
                <div className="overflow-hidden rounded-[20px] relative" style={{ boxShadow: '20px 20px 60px rgba(45,10,10,0.2)' }}>
                  <img src={STORY_IMG} alt="Traditional wedding" className="w-full aspect-[4/5] object-cover" style={{ maxHeight: '420px', animation: 'kenburns 25s ease-in-out infinite alternate' }} loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section style={{ background: 'hsl(0 60% 11%)', padding: '48px 0' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <s.icon className="w-5 h-5 mx-auto mb-2" style={{ color: '#C9A84C', opacity: 0.7 }} />
                <div className="font-display font-light text-[32px] md:text-[40px] text-white mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="eyebrow" style={{ color: 'hsl(30 16% 69%)' }}>{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Chairman Section */}
    <section className="relative overflow-hidden">
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
      <div className="relative" style={{ background: 'linear-gradient(135deg, #2D0A0A 0%, #1A0808 100%)', padding: 'clamp(48px,8vw,96px) clamp(16px,5vw,80px)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,168,76,0.025) 0px, rgba(201,168,76,0.025) 1px, transparent 1px, transparent 14px)' }} />
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
              <span className="eyebrow" style={{ color: '#C9A84C' }}>From the Chairman's Desk</span>
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-4 flex flex-col items-center">
              <ScrollReveal delay={100}>
                <div
                  className="mx-auto overflow-hidden"
                  style={{
                    width: 'clamp(180px,22vw,260px)', height: 'clamp(180px,22vw,260px)',
                    borderRadius: '50%',
                    border: '3px solid rgba(201,168,76,0.45)',
                    boxShadow: '0 0 0 10px rgba(201,168,76,0.07), 0 32px 80px rgba(15,10,5,0.6)',
                  }}
                >
                  <img
                    src={CHAIRMAN_IMG}
                    alt="Nadendla Siva Nageswararao"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.background = 'linear-gradient(135deg, #3D1208, #2D0A0A)';
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML += '<span style="font-family:Cormorant Garamond,serif;font-size:72px;font-weight:300;color:rgba(201,168,76,0.6);">N</span>';
                      }
                    }}
                  />
                </div>
                <div className="text-center mt-6" style={{ background: 'rgba(201,168,76,0.09)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '14px', padding: '16px 28px' }}>
                  <p className="font-display font-semibold text-[20px]" style={{ color: '#E8CC85' }}>Nadendla Siva Nageswararao</p>
                  <p className="font-body font-light text-[12px] tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Chairman & Managing Director</p>
                  <p className="font-body font-light text-[11px]" style={{ color: 'rgba(201,168,76,0.45)' }}>Kammavijayam Publications & Kammavaari.com</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delay={200}>
                <span className="font-display text-[96px] leading-[0.8] block" style={{ color: 'rgba(201,168,76,0.12)' }}>"</span>
                <blockquote className="font-accent leading-[1.65] -mt-8" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'rgba(255,255,255,0.88)' }}>
                  We owe our gratitude to the great community of Kamma for believing in us. We work hard to obtain the best results and keep your belief always.
                </blockquote>
                <p className="mt-6 font-body font-medium text-[13px] tracking-[0.08em]" style={{ color: '#C9A84C' }}>— Nadendla Siva Nageswararao</p>
                <p className="font-body font-light text-[12px]" style={{ color: 'rgba(201,168,76,0.5)' }}>Chairman & Managing Director · Est. 2009</p>
                <div className="mt-7" style={{ width: '64px', height: '1px', background: '#C9A84C', opacity: 0.6 }} />
                <div className="flex flex-wrap gap-3 mt-5">
                  {["Est. 2009", "No.1 Community Portal"].map(label => (
                    <span key={label} className="font-body text-[12px]" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '6px 16px', color: 'rgba(201,168,76,0.8)' }}>
                      {label}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, hsla(40,52%,54%,0.3), transparent)' }} />
    </section>

    {/* Values — Image Background Cards */}
    <section className="section-padding" style={{ background: '#FFFDF8' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
              <span className="eyebrow" style={{ color: '#7A6550' }}>WHAT WE STAND FOR</span>
              <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px,4.5vw,56px)', color: '#0F0A05', letterSpacing: '-0.02em' }}>
              Our <span className="font-semibold italic" style={{ color: '#9B7A2A' }}>Values</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 120}>
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: '20px', height: 'clamp(200px, 28vw, 280px)' }}
              >
                <img
                  src={valueImages[i]}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: 'transform 0.6s ease, filter 0.6s ease' }}
                  loading="lazy"
                  onMouseEnter={() => {}}
                />
                <div className="absolute inset-0 transition-opacity duration-[600ms]" style={{ background: 'linear-gradient(to top, rgba(15,10,5,0.92) 0%, rgba(15,10,5,0.55) 50%, rgba(15,10,5,0.2) 100%)' }} />
                <style>{`
                  .values-card-${i}:hover .values-bg { transform: scale(1.06); filter: brightness(0.8) saturate(1.1) !important; }
                  .values-card-${i}:hover .values-overlay { opacity: 0.3 !important; }
                  .values-card-${i} .values-bg { filter: brightness(0.35) saturate(0.8); transition: transform 0.6s ease, filter 0.6s ease; }
                  .values-card-${i} .values-overlay { transition: opacity 0.6s ease; }
                `}</style>
                <img
                  src={valueImages[i]}
                  alt={v.title}
                  className={`values-bg absolute inset-0 w-full h-full object-cover`}
                  loading="lazy"
                />
                <div className={`values-overlay absolute inset-0`} style={{ background: 'linear-gradient(to top, rgba(15,10,5,0.92) 0%, rgba(15,10,5,0.55) 50%, rgba(15,10,5,0.2) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 relative" style={{ padding: 'clamp(16px,3vw,24px)', zIndex: 2 }}>
                  <div className="inline-block rounded-xl transition-all duration-500" style={{ background: 'rgba(10,5,2,0.6)', backdropFilter: 'blur(6px)', padding: '12px 16px' }}>
                    <span style={{ color: '#C9A84C', fontSize: '22px', display: 'block', marginBottom: '8px' }}>{v.icon}</span>
                    <h3 className="font-display font-semibold text-white mb-1" style={{ fontSize: 'clamp(18px,2.5vw,22px)' }}>{v.title}</h3>
                    <p className="font-body font-light text-[13px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.72)' }}>{v.body}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] transition-transform duration-[400ms] origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'linear-gradient(to right, #C9A84C, transparent)' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default AboutUs;
