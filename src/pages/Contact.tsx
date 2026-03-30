import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const CONTACT_HERO = "https://i.pinimg.com/1200x/45/6a/8e/456a8e8787815c09608a6bf826de59de.jpg";
const CONTACT_FALLBACK = "https://i.pinimg.com/1200x/39/35/84/3935844c7c004a22b7c5b07efa986e53.jpg";

const branches = [
  { name: "Headquarters", address: "Plot No 1282, Road No 64, Jubilee Hills, Hyderabad - 500033", hq: true, mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4083!3d17.4325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c96dbd6aa9%3A0x8a6d1b44a6b1f0!2sJubilee+Hills%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000" },
  { name: "KPHB Branch", address: "Flat No 501, Shanth Apartments, KPHB, Hyderabad", hq: false, mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.3916!3d17.4849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e8ebd1e5e7%3A0x8a6d1b44a6b1f0!2sKPHB+Colony%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000001" },
  { name: "Vijayawada Branch", address: "Flat No F4, Sai Sudha Apartments, Gayatri Nagar, Vijayawada - 520010", hq: false, mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31506bc8672d2e1b%3A0x8a6d1b44a6b1f0!2sVijayawada!5e0!3m2!1sen!2sin!4v1700000000002" },
  { name: "Eluru Branch", address: "Opp Dr. Jagannmohan Rao House, MR Pet, Eluru - 534008", hq: false, mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6!2d81.0952!3d16.7107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cabb6cba1517%3A0x8a6d1b44a6b1f0!2sEluru!5e0!3m2!1sen!2sin!4v1700000000003" },
  { name: "Guntur Branch", address: "Flat No 12, Sindhuri Apartments, Nalanda Nagar, Guntur", hq: false, mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5!2d80.4365!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31506bc8672d2e1b%3A0x8a6d1b44a6b1f0!2sGuntur!5e0!3m2!1sen!2sin!4v1700000000004" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [lookingFor, setLookingFor] = useState<"Bride" | "Groom">("Bride");
  const [selectedBranch, setSelectedBranch] = useState(0);

  const inputStyle: React.CSSProperties = {
    width: '100%', minHeight: '48px', padding: '0 18px', borderRadius: '16px',
    border: '1px solid rgba(201,168,76,0.2)', background: '#FBF5EB',
    fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.5,
    color: '#0F0A05', outline: 'none', transition: 'border-color 200ms ease, box-shadow 200ms ease',
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#C9A84C';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.12)';
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: 'clamp(40vh, 45vh, 50vh)', minHeight: '240px' }}>
        <div className="absolute inset-0">
          <img
            src={CONTACT_HERO} alt="" className="w-full h-full object-cover" loading="eager"
            onError={(e) => { const el = e.currentTarget; if (!el.dataset.fallbackUsed) { el.dataset.fallbackUsed = 'true'; el.src = CONTACT_FALLBACK; } }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,10,5,0.5) 0%, rgba(15,10,5,0.15) 35%, rgba(15,10,5,0.7) 70%, rgba(15,10,5,0.9) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15,10,5,0.6) 100%)' }} />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
              <span className="eyebrow" style={{ color: '#C9A84C' }}>GET IN TOUCH</span>
              <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
            </div>
            <h1 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.02em' }}>We're Here For You</h1>
            <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.65)' }}>Reach out and let our experts guide your search</p>
            <p className="font-body font-light text-[13px] mt-2" style={{ color: 'rgba(201,168,76,0.7)' }}>We respond within 4 business hours</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pt-6 pb-24 sm:pt-8 sm:pb-12 lg:py-16" style={{ background: '#FFFDF8' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 max-w-6xl mx-auto">
            {/* Left */}
            <div>
              <ScrollReveal>
                <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#0F0A05' }}>Let's Begin Your Story</h2>
                <p className="font-accent text-[18px] mb-6 lg:mb-10" style={{ color: '#9B7A2A' }}>Every great match starts with a conversation</p>

                <div className="space-y-5 mb-8 lg:mb-10">
                  {[
                    { icon: Phone, label: "CALL US", text: "+91-9177036777", href: "tel:+919177036777" },
                    { icon: Mail, label: "EMAIL US", text: "info@kammavaari.com", href: "mailto:info@kammavaari.com" },
                    { icon: MapPin, label: "VISIT US", text: "Plot 1282, Road 64, Jubilee Hills, Hyderabad", href: "#" },
                  ].map(c => (
                    <a key={c.label} href={c.href} className="flex items-start gap-4 lg:gap-5 group">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FBF5EB', border: '1px solid rgba(201,168,76,0.2)' }}>
                        <c.icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: '#C9A84C' }} />
                      </div>
                      <div>
                        <p className="font-body font-medium text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: '#9B7A2A' }}>{c.label}</p>
                        <p className="font-body font-normal text-[14px] leading-[1.6] lg:text-[15px]" style={{ color: '#2C1F10' }}>{c.text}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href="https://wa.me/919177036777" target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 font-body text-[15px] font-semibold text-white transition-all"
                  style={{ height: '52px', background: 'linear-gradient(135deg, #25D366, #1EA952)', borderRadius: '18px', border: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <svg viewBox="0 0 32 32" fill="white" className="w-[22px] h-[22px]"><path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.468.655 4.876 1.898 6.988L2 30l7.188-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.596a11.57 11.57 0 0 1-5.896-1.614l-.422-.252-4.372 1.146 1.168-4.264-.274-.438a11.56 11.56 0 0 1-1.778-6.174c0-6.396 5.204-11.6 11.6-11.6 6.396 0 11.6 5.204 11.6 11.6-.002 6.396-5.206 11.596-11.626 11.596zm6.362-8.686c-.348-.174-2.064-1.018-2.384-1.134-.32-.116-.552-.174-.784.174-.232.348-.898 1.134-1.102 1.366-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.586-.282-.678-.57-.586-.784-.596-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.928.436-.32.348-1.218 1.19-1.218 2.9 0 1.712 1.248 3.366 1.422 3.598.174.232 2.454 3.748 5.946 5.254.832.358 1.482.572 1.988.732.836.266 1.596.228 2.198.138.67-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.204-1.66-.088-.146-.32-.232-.668-.406z" /></svg>
                  Chat on WhatsApp
                </a>
                <p className="font-body font-light text-[11px] text-center mt-3.5" style={{ color: '#9B7A2A' }}>Usually responds within 30 minutes</p>

                <div className="mt-8 bg-white rounded-[24px] p-5 lg:p-6" style={{ border: '1px solid rgba(201,168,76,0.12)' }}>
                  <h4 className="font-body font-medium text-[13px] tracking-[0.08em] uppercase mb-4" style={{ color: '#5C4510' }}>Office Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between font-body font-light text-[14px]" style={{ color: '#7A6550' }}>
                      <span>Mon – Sat</span><span>9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between font-body font-light text-[14px]" style={{ color: '#7A6550' }}>
                      <span>Sunday</span><span>10:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <ScrollReveal delay={100}>
              <div className="relative overflow-hidden mb-4 lg:mb-0" style={{ background: 'white', borderRadius: 'clamp(18px,3vw,28px)', border: '1px solid rgba(201,168,76,0.15)', padding: 'clamp(24px,5vw,52px) clamp(20px,4.5vw,52px)', paddingBottom: 'clamp(32px,9vw,52px)', boxShadow: '0 12px 64px rgba(15,10,5,0.08)' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #C9A84C, #8B2E2E)' }} />
                <h2 className="font-display font-semibold mb-1" style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#2C1F10' }}>Send Us a Message</h2>
                <p className="font-body font-light text-[13px] mb-5 lg:mb-6" style={{ color: '#9B7A2A' }}>We'll get back to you within 4 hours</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)' }}>
                      <Send className="w-7 h-7" style={{ color: '#C9A84C' }} />
                    </div>
                    <h3 className="font-display font-semibold text-[22px] mb-2" style={{ color: '#0F0A05' }}>Message Sent!</h3>
                    <p className="font-body font-light text-[15px]" style={{ color: '#7A6550' }}>Our team will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-5 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div>
                      <label className="font-body text-[11px] tracking-[0.08em] uppercase block mb-2" style={{ color: '#7A6550' }}>Full Name</label>
                      <input type="text" placeholder="Your full name" required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-[0.08em] uppercase block mb-2" style={{ color: '#7A6550' }}>Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-[0.08em] uppercase block mb-2" style={{ color: '#7A6550' }}>Email Address</label>
                      <input type="email" placeholder="you@email.com" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-[0.08em] uppercase block mb-2" style={{ color: '#7A6550' }}>I am looking for</label>
              <div className="grid grid-cols-2 gap-2.5">
                        {(["Bride", "Groom"] as const).map(g => (
                          <button key={g} type="button" onClick={() => setLookingFor(g)} className="font-body text-[13px] font-medium transition-all btn-gold" style={{
                            height: '44px', borderRadius: '14px', cursor: 'pointer',
                            border: lookingFor === g ? 'none' : '1px solid rgba(201,168,76,0.2)',
                            background: lookingFor === g ? 'linear-gradient(135deg, #C9A84C, #B8923A)' : '#FBF5EB',
                            color: lookingFor === g ? '#0F0A05' : '#9B7A2A',
                            boxShadow: lookingFor === g ? '0 4px 16px rgba(201,168,76,0.3)' : 'none',
                          }}>
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-[0.08em] uppercase block mb-2" style={{ color: '#7A6550' }}>Message</label>
                      <textarea rows={3} placeholder="Tell us how we can help..." required className="w-full font-body font-light text-[13px] resize-none" style={{ ...inputStyle, minHeight: '96px', padding: '12px 18px' }} onFocus={focusHandler as any} onBlur={blurHandler as any} />
                    </div>
                    <button type="submit" className="w-full font-body text-[13px] font-semibold flex items-center justify-center gap-2 btn-gold" style={{
                      height: '50px', background: 'linear-gradient(135deg, #C9A84C 0%, #B8923A 100%)', color: '#0F0A05',
                      borderRadius: '16px', border: 'none', letterSpacing: '0.05em', boxShadow: '0 4px 24px rgba(201,168,76,0.35)', cursor: 'pointer',
                    }}>
                      <Send className="w-4 h-4" /> Send Message & Request Callback →
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Map + Branches */}
          <div className="max-w-6xl mx-auto mt-10 lg:mt-20">
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 'clamp(36px,5vw,56px)' }}>
              <ScrollReveal>
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
                    <span className="eyebrow" style={{ color: '#7A6550' }}>OUR OFFICES</span>
                    <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
                  </div>
                  <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px,4vw,44px)', color: '#2C1F10' }}>Find Us Near You</h2>
                </div>
              </ScrollReveal>

              {/* Dynamic Map */}
              <ScrollReveal delay={50}>
                <div className="overflow-hidden mb-10" style={{ borderRadius: '24px', border: '1px solid rgba(201,168,76,0.15)', height: 'clamp(220px,32vw,360px)' }}>
                  <iframe
                    key={selectedBranch}
                    src={branches[selectedBranch].mapUrl}
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title={`${branches[selectedBranch].name} Location`}
                  />
                </div>
              </ScrollReveal>

              {/* Branch cards */}
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {branches.map((b, i) => (
                  <ScrollReveal key={b.name} delay={i * 60}>
                    <div
                      onClick={() => setSelectedBranch(i)}
                      className="flex items-start gap-3 transition-all cursor-pointer"
                      style={{
                        background: selectedBranch === i ? 'rgba(201,168,76,0.08)' : 'white',
                        border: `1.5px solid ${selectedBranch === i ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'}`,
                        borderRadius: '16px', padding: '18px 20px',
                        transition: 'all 240ms ease',
                        boxShadow: selectedBranch === i ? '0 4px 20px rgba(201,168,76,0.15)' : 'none',
                      }}
                      onMouseEnter={e => { if (selectedBranch !== i) { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                      onMouseLeave={e => { if (selectedBranch !== i) { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                    >
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: selectedBranch === i ? '#C9A84C' : '#9B7A2A' }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-semibold text-[15px]" style={{ color: '#2C1F10' }}>{b.name}</h3>
                          {b.hq && (
                            <span className="font-body font-medium text-[9px] tracking-[0.1em] uppercase" style={{ background: 'rgba(201,168,76,0.15)', borderRadius: '4px', padding: '1px 6px', color: '#9B7A2A' }}>HQ</span>
                          )}
                        </div>
                        <p className="font-body font-light text-[12px] leading-[1.5] mt-1" style={{ color: '#9B7A2A' }}>{b.address}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
