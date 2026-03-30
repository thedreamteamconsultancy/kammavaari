import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useAuthModal } from "@/hooks/useAuthModal";
import { HeartHandshake, Phone, Calendar, Star, Users, MessageCircle, ArrowRight, Sparkles, Clock, Shield } from "lucide-react";

const benefits = [
  { icon: HeartHandshake, title: "Personal Match Guidance", desc: "Your dedicated RM understands your family's values, traditions, and preferences to find the ideal match from our verified database.", gradient: "linear-gradient(135deg, #C9A84C, #D4B65A)" },
  { icon: Phone, title: "Always Available", desc: "Direct phone and WhatsApp access to your relationship manager. Get answers within minutes, not days.", gradient: "linear-gradient(135deg, #B8923A, #C9A84C)" },
  { icon: Calendar, title: "Meeting Coordination", desc: "We arrange and coordinate meetings between families at venues convenient for both parties, handling all logistics.", gradient: "linear-gradient(135deg, #D4B65A, #E5C76B)" },
  { icon: Star, title: "Priority Matchmaking", desc: "Premium members receive first access to new profiles and priority introductions before they're visible to others.", gradient: "linear-gradient(135deg, #A0802E, #B8923A)" },
  { icon: Shield, title: "Privacy Protection", desc: "Your RM acts as an intermediary — your contact details are never shared without your explicit approval.", gradient: "linear-gradient(135deg, #C9A84C, #B8923A)" },
  { icon: Clock, title: "24/7 Support", desc: "Emergencies don't wait for business hours. Your RM is available round the clock for urgent matters.", gradient: "linear-gradient(135deg, #D4B65A, #C9A84C)" },
];

const process = [
  { step: "01", title: "Get Assigned", desc: "Within 4 hours of registration, a dedicated RM contacts you personally to understand your requirements.", icon: Users },
  { step: "02", title: "Share Preferences", desc: "Discuss your family values, expectations, partner preferences, and any specific requirements in detail.", icon: MessageCircle },
  { step: "03", title: "Receive Matches", desc: "Your RM handpicks compatible profiles from our verified database and presents curated matches weekly.", icon: HeartHandshake },
  { step: "04", title: "Meet & Connect", desc: "We coordinate family meetings, guide conversations, and support you through every step to the wedding.", icon: Star },
];

const testimonials = [
  { name: "Rajesh & Family", text: "Our RM Priya understood exactly what we wanted. She found 3 perfect matches within the first week itself.", location: "Hyderabad" },
  { name: "Surekha's Parents", text: "Having a dedicated person who knew our family's requirements made the entire process stress-free and dignified.", location: "Vijayawada" },
];

const DedicatedRM = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const { openAuth } = useAuthModal();

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--cream-50))' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>
        <div className="absolute inset-0" style={{ background: 'hsl(var(--ink-900))' }} />
        <img
          src="https://i.pinimg.com/1200x/50/f0/67/50f0672e3ed17ccc1703bc91a40e5f34.jpg"
          alt="Dedicated RM"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.1, filter: 'saturate(0.4)' }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,52%,54%,0.1), transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(var(--cream-50)), transparent)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <HeartHandshake className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Personal Touch</span>
            </div>
            <h1 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Your Dedicated{' '}
              <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>Relationship Manager</span>
            </h1>
            <p className="font-body font-light text-[17px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
              A personal guide who understands your family's values and walks with you through every step of your matrimonial journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro with side image */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <ScrollReveal>
                <div className="relative">
                  <div className="overflow-hidden" style={{ borderRadius: '28px', boxShadow: '0 24px 60px hsla(30,50%,4%,0.12)' }}>
                    <img
                      src="https://i.pinimg.com/736x/ff/f9/92/fff992f8730317b747f5955629b66031.jpg"
                      alt="Professional relationship manager"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  {/* Floating stat */}
                  <div className="absolute -bottom-5 -right-3 md:-right-5 px-6 py-4" style={{
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 12px 40px hsla(30,50%,4%,0.1)',
                    border: '1px solid hsla(40,52%,54%,0.1)',
                  }}>
                    <span className="font-display font-semibold text-[28px] block" style={{ color: 'hsl(var(--gold-600))' }}>4hrs</span>
                    <span className="font-body text-[11px] tracking-[0.08em] uppercase" style={{ color: 'hsl(var(--ink-300))' }}>Avg. Response</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2">
              <ScrollReveal delay={100}>
                <h2 className="font-display font-light mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'hsl(var(--ink-900))' }}>
                  Like a Trusted Family Elder
                </h2>
                <p className="font-body font-light mb-6" style={{ fontSize: '16px', lineHeight: 1.9, color: 'hsl(var(--ink-400))' }}>
                  Every premium member is assigned a dedicated Relationship Manager who personally guides the entire matchmaking process — from profile selection to family introductions. They understand both tradition and modern preferences.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Personalized", "Confidential", "24/7 Support"].map(tag => (
                    <span key={tag} className="font-body text-[12px] px-4 py-2 rounded-full" style={{ background: 'hsla(40,52%,54%,0.08)', color: 'hsl(var(--gold-700))', border: '1px solid hsla(40,52%,54%,0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — premium grid */}
      <section className="py-20 px-4" style={{ background: 'white' }}>
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'hsl(var(--ink-900))' }}>
                Why Choose a Dedicated RM?
              </h2>
              <p className="font-body font-light text-[15px] mt-3" style={{ color: 'hsl(var(--ink-300))' }}>
                The personal touch that makes all the difference
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="group relative p-7 transition-all duration-500 hover:-translate-y-1" style={{
                  borderRadius: '24px',
                  background: 'hsl(var(--cream-50))',
                  border: '1px solid hsla(40,52%,54%,0.08)',
                  height: '100%',
                }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{ background: b.gradient, boxShadow: '0 4px 16px rgba(201,168,76,0.2)' }}>
                    <b.icon className="w-5 h-5" style={{ color: '#FFFDF8' }} />
                  </div>
                  <h3 className="font-display font-semibold text-[18px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{b.title}</h3>
                  <p className="font-body font-light text-[13px] leading-[1.8]" style={{ color: 'hsl(var(--ink-400))' }}>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process */}
      <section className="py-24" style={{ background: 'hsl(var(--ink-900))' }}>
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
                <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>How It Works</span>
              </div>
              <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                Four Steps to Your Match
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Steps list */}
            <div className="space-y-3">
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 80}>
                  <button
                    onClick={() => setActiveProcess(i)}
                    className="w-full text-left flex items-start gap-4 p-5 transition-all duration-500"
                    style={{
                      borderRadius: '18px',
                      background: activeProcess === i ? 'rgba(201,168,76,0.06)' : 'transparent',
                      border: `1px solid ${activeProcess === i ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.04)'}`,
                      cursor: 'pointer',
                    }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500" style={{
                      background: activeProcess === i ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))' : 'rgba(255,255,255,0.04)',
                      boxShadow: activeProcess === i ? '0 4px 20px rgba(201,168,76,0.3)' : 'none',
                    }}>
                      <span className="font-display font-semibold text-[13px]" style={{ color: activeProcess === i ? 'hsl(var(--ink-900))' : 'rgba(255,255,255,0.3)' }}>{p.step}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[17px] mb-1" style={{ color: activeProcess === i ? 'white' : 'rgba(255,255,255,0.4)' }}>{p.title}</h3>
                      <p className="font-body font-light text-[13px] leading-[1.7]" style={{ color: activeProcess === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}>{p.desc}</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* Visual card */}
            <ScrollReveal delay={200}>
              <div className="relative p-10 text-center" style={{
                borderRadius: '28px',
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}>
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500" style={{
                  background: 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))',
                  boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
                }}>
                  {(() => { const Icon = process[activeProcess].icon; return <Icon className="w-8 h-8" style={{ color: '#FFFDF8' }} />; })()}
                </div>
                <h3 className="font-display font-semibold text-[24px] text-white mb-3">{process[activeProcess].title}</h3>
                <p className="font-body font-light text-[15px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.6)' }}>{process[activeProcess].desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ background: 'hsl(var(--cream-50))' }}>
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display font-light text-center mb-12" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'hsl(var(--ink-900))' }}>
              What Families Say
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="p-8" style={{
                  background: 'white',
                  borderRadius: '24px',
                  border: '1px solid hsla(40,52%,54%,0.1)',
                  boxShadow: '0 4px 24px hsla(30,50%,4%,0.04)',
                }}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                    ))}
                  </div>
                  <p className="font-accent text-[15px] leading-[1.8] mb-5" style={{ color: 'hsl(var(--ink-400))', fontStyle: 'italic' }}>"{t.text}"</p>
                  <div>
                    <span className="font-display font-semibold text-[15px] block" style={{ color: 'hsl(var(--ink-900))' }}>{t.name}</span>
                    <span className="font-body text-[12px]" style={{ color: 'hsl(var(--ink-300))' }}>{t.location}</span>
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
            <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Get Your Personal RM Today
            </h2>
            <p className="font-body font-light text-[15px] mb-8" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              Join our premium plan and get matched with a dedicated relationship manager within 4 hours.
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
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DedicatedRM;
