import ScrollReveal from "./ScrollReveal";

const CTA_IMG = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
      {/* Real image */}
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="Wedding celebration" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* Maroon overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(90,26,26,0.88) 0%, rgba(45,10,10,0.92) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ padding: 'clamp(64px,10vw,96px) clamp(16px,5vw,80px)' }}>
        <ScrollReveal>
          {/* Gold ornamental line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.4)' }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="hsla(40,52%,54%,0.5)" />
            </svg>
            <div className="w-16 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.4)' }} />
          </div>

          <h2
            className="font-display font-light text-white mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Your Perfect Match is Waiting
          </h2>

          <p className="font-accent text-[18px] mb-4" style={{ color: 'rgba(201,168,76,0.85)' }}>
            "Every great love story begins with a single step."
          </p>

          <p
            className="font-body font-light text-[15px] mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', lineHeight: 1.75 }}
          >
            Thousands of Kammavaari families from Andhra Pradesh,
            Telangana, Karnataka and around the world have found
            their life partners here. Your turn.
          </p>

          <button
            className="font-body text-[14px] font-semibold transition-all"
            style={{
              background: 'hsl(40 52% 54%)',
              color: 'hsl(30 50% 4%)',
              padding: '16px 40px',
              borderRadius: '9999px',
              border: 'none',
              boxShadow: 'var(--shadow-gold-sm)',
              animation: 'goldPulse 2.4s ease-in-out infinite',
              transitionDuration: 'var(--duration-fast)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'hsl(40 66% 71%)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'hsl(40 52% 54%)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Register Free Today
          </button>

          <p className="font-body font-light text-[12px] mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Free to join · No credit card required · Takes 2 minutes
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
