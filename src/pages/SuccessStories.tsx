import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useAuthModal } from "@/hooks/useAuthModal";
import { Star, Heart, Quote, ArrowRight, ArrowLeft, Sparkles, MapPin, Calendar } from "lucide-react";

const stories = [
  { names: "Lakshmi & Venkata", location: "Vijayawada", year: "2022", quote: "We were introduced through Kammavaari in December 2021. Our families connected instantly over shared values. Ours was a grand Telugu wedding that brought two families together beautifully. We are grateful forever.", image: "https://i.pinimg.com/736x/e8/d1/a9/e8d1a9e54b2b6e5aa5e43a13ec4e8576.jpg", duration: "3 months" },
  { names: "Sujatha & Ravi", location: "Hyderabad", year: "2023", quote: "My parents were very particular about community values and family background. Kammavaari's dedicated RM found us a match that honored both traditional expectations and modern compatibility.", image: "https://i.pinimg.com/1200x/9e/7b/81/9e7b815120c303564fc3205be4bacd86.jpg", duration: "6 weeks" },
  { names: "Divya & Karthik", location: "Guntur", year: "2023", quote: "From the moment we connected, our families felt at ease. The verification process gave us confidence. Our Muhurtham was on Akshaya Tritiya — auspicious in every way.", image: "https://i.pinimg.com/736x/7a/82/52/7a8252022f3d1b0461088a17eaeda794.jpg", duration: "2 months" },
  { names: "Priya & Suresh", location: "Eluru", year: "2024", quote: "The dedicated RM understood exactly what our family was looking for. Within three months of joining, we found our perfect match. The personalized approach made all the difference.", image: "https://cdn0.weddingwire.in/article/3427/original/1280/jpg/127243-golden-shutter-studio.jpeg", duration: "3 months" },
  { names: "Anitha & Prasad", location: "KPHB, Hyderabad", year: "2024", quote: "We were skeptical about matrimony platforms, but Kammavaari's personal touch changed our perspective. Our RM treated us like family throughout the journey.", image: "https://i.pinimg.com/736x/7f/76/21/7f76217aebc3af15bab86140a9ad9c76.jpg", duration: "5 weeks" },
];

const stats = [
  { value: "5,000+", label: "Happy Couples" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "4.9★", label: "Average Rating" },
  { value: "45 days", label: "Avg. Match Time" },
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const { openAuth } = useAuthModal();

  const nextStory = () => setActiveStory(p => (p + 1) % stories.length);
  const prevStory = () => setActiveStory(p => (p - 1 + stories.length) % stories.length);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--cream-50))' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>
        <div className="absolute inset-0" style={{ background: 'hsl(var(--ink-900))' }} />
        <img
          src="https://i.pinimg.com/1200x/c9/62/af/c962af1118ca04572f1ceb86e6265492.jpg"
          alt="Happy couple"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.12, filter: 'saturate(0.5)' }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,52%,54%,0.1), transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(var(--cream-50)), transparent)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <Heart className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Love Stories</span>
            </div>
            <h1 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Stories That{' '}
              <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>Inspire</span>
            </h1>
            <p className="font-body font-light text-[17px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
              Every match is a celebration of tradition, values, and love. Read the journeys of families who found their forever.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating stats */}
      <section className="relative" style={{ marginTop: '-60px', zIndex: 10 }}>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="text-center py-6 px-4" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 12px 40px hsla(30,50%,4%,0.08)',
                  border: '1px solid hsla(40,52%,54%,0.1)',
                }}>
                  <span className="font-display font-semibold block" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'hsl(var(--gold-600))' }}>{s.value}</span>
                  <span className="font-body font-light text-[11px] tracking-[0.1em] uppercase" style={{ color: 'hsl(var(--ink-300))' }}>{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story — large showcase */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'hsl(var(--ink-900))' }}>
                Featured Couples
              </h2>
            </div>
          </ScrollReveal>

          {/* Story showcase card */}
          <div className="relative overflow-hidden" style={{
            borderRadius: '32px',
            background: 'white',
            border: '1px solid hsla(40,52%,54%,0.1)',
            boxShadow: '0 16px 60px hsla(30,50%,4%,0.08)',
          }}>
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/2" style={{ minHeight: '360px' }}>
                {stories.map((s, i) => (
                  <img
                    key={s.names}
                    src={s.image}
                    alt={s.names}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === activeStory ? 1 : 0 }}
                  />
                ))}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1))' }} />
                {/* Stars overlay */}
                <div className="absolute top-6 left-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                  ))}
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
                  <span className="font-body text-[12px] text-white">Matched in {stories[activeStory].duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
                    <span className="font-body text-[12px]" style={{ color: 'hsl(var(--ink-300))' }}>{stories[activeStory].location}</span>
                  </div>
                  <span style={{ color: 'hsl(var(--ink-200))' }}>·</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
                    <span className="font-body text-[12px]" style={{ color: 'hsl(var(--ink-300))' }}>{stories[activeStory].year}</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 32px)', color: 'hsl(var(--ink-900))' }}>
                  {stories[activeStory].names}
                </h3>

                <div className="relative mb-8">
                  <Quote className="w-10 h-10 mb-3" style={{ color: 'hsla(40,52%,54%,0.15)' }} />
                  <p className="font-accent text-[16px] leading-[1.9]" style={{ color: 'hsl(var(--ink-400))', fontStyle: 'italic' }}>
                    {stories[activeStory].quote}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    style={{ border: '1px solid hsla(40,52%,54%,0.2)', background: 'transparent', cursor: 'pointer', color: 'hsl(var(--gold-600))' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'hsla(40,52%,54%,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2">
                    {stories.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStory(i)}
                        className="transition-all"
                        style={{
                          width: i === activeStory ? '24px' : '8px',
                          height: '8px',
                          borderRadius: '999px',
                          background: i === activeStory ? 'hsl(var(--gold-500))' : 'hsl(var(--ink-200))',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'all 400ms ease',
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    style={{ border: '1px solid hsla(40,52%,54%,0.2)', background: 'transparent', cursor: 'pointer', color: 'hsl(var(--gold-600))' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'hsla(40,52%,54%,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All stories grid */}
      <section className="py-16 px-4" style={{ background: 'white' }}>
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'hsl(var(--ink-900))' }}>
                More Happy Couples
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <ScrollReveal key={s.names} delay={i * 80}>
                <div className="group overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{
                  borderRadius: '24px',
                  background: 'hsl(var(--cream-50))',
                  border: '1px solid hsla(40,52%,54%,0.08)',
                }}>
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <img src={s.image} alt={s.names} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(var(--cream-50)) 5%, transparent 50%)' }} />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                      <span className="font-body text-[11px] text-white">{s.year}</span>
                    </div>
                  </div>
                  <div className="p-6 pt-1">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                      ))}
                    </div>
                    <h3 className="font-display font-semibold text-[18px] mb-1" style={{ color: 'hsl(var(--ink-900))' }}>{s.names}</h3>
                    <span className="font-body text-[12px] block mb-3" style={{ color: 'hsl(var(--ink-300))' }}>{s.location}</span>
                    <p className="font-body font-light text-[13px] leading-[1.7] line-clamp-3" style={{ color: 'hsl(var(--ink-400))' }}>"{s.quote}"</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, hsl(var(--ink-900)), hsl(var(--ink-800)))' }}>
        <div className="container mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Your Story Awaits</span>
            </div>
            <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Write Your Own Love Story
            </h2>
            <p className="font-body font-light text-[15px] mb-8" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              Join thousands of happy couples who found their perfect match through Kammavaari Matrimony.
            </p>
            <button
              className="inline-flex items-center gap-2 font-body font-semibold text-[14px] transition-all"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-600)))',
                color: 'hsl(var(--ink-900))', padding: '14px 36px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              onClick={() => openAuth('signup')}
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SuccessStories;
