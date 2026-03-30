import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useAuthModal } from "@/hooks/useAuthModal";

const LOGO_URL = "https://res.cloudinary.com/dvmrhs2ek/image/upload/v1774700099/wjibi9xge8sdyxqhi09a.png";

const serviceLinks = [
  { label: "Verified Profiles", to: "/services/verified-profiles" },
  { label: "Dedicated RM", to: "/services/dedicated-rm" },
  { label: "Privacy Settings", to: "/services/privacy-settings" },
  { label: "Success Stories", to: "/services/success-stories" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "#", children: serviceLinks },
  { label: "Gallery", to: "/gallery" },
  { label: "Premium Plans", to: "/premium-plans" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openAuth: openAuthModal } = useAuthModal();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openAuth = (mode: "login" | "signup") => {
    openAuthModal(mode);
    setMobileOpen(false);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const isServiceActive = serviceLinks.some(s => location.pathname === s.to);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 transition-all"
        style={{
          zIndex: 100,
          background: scrolled ? 'rgba(15, 10, 5, 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid hsla(40,52%,54%,0.15)' : '1px solid transparent',
          padding: scrolled ? '12px 0' : '20px 0',
          transitionDuration: '300ms',
          transitionTimingFunction: 'var(--ease-luxury)',
        }}
      >
        <div className="mx-auto flex items-center justify-between" style={{ padding: '0 clamp(16px,5vw,80px)' }}>
          <Link to="/">
            <img
              src={LOGO_URL}
              alt="Kammavaari Matrimony"
              style={{ height: 'clamp(32px, 4vw, 40px)', filter: scrolled ? 'brightness(1.1)' : 'none', transition: 'filter 300ms' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 'clamp(20px, 3vw, 48px)' }}>
            {navLinks.map((link) => {
              const isActive = link.children ? isServiceActive : location.pathname === link.to;

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <button
                      className="relative font-body text-[13px] font-normal transition-colors group flex items-center gap-1"
                      style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.78)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <span className="group-hover:text-white transition-colors">{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                      <span
                        className="absolute bottom-[-2px] left-0 h-[1px] transition-all group-hover:!w-full"
                        style={{
                          width: isActive ? '100%' : '0%',
                          background: 'hsl(40 52% 54%)',
                          transitionDuration: 'var(--duration-base)',
                        }}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      style={{
                        position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                        minWidth: '220px',
                        background: 'rgba(15, 10, 5, 0.92)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        border: '1px solid hsla(40,52%,54%,0.2)',
                        borderRadius: '16px',
                        padding: '8px',
                        opacity: servicesOpen ? 1 : 0,
                        pointerEvents: servicesOpen ? 'auto' : 'none',
                        transition: 'opacity 250ms ease, transform 250ms ease',
                        transformOrigin: 'top center',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                      }}
                    >
                      {link.children.map(child => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block font-body text-[13px] font-normal transition-all"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '10px',
                            color: location.pathname === child.to ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.color = '#C9A84C'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = location.pathname === child.to ? '#C9A84C' : 'rgba(255,255,255,0.75)'; }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="relative font-body text-[13px] font-normal transition-colors group"
                  style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.78)' }}
                >
                  <span className="group-hover:text-white transition-colors">{link.label}</span>
                  <span
                    className="absolute bottom-[-2px] left-0 h-[1px] transition-all group-hover:!w-full"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: 'hsl(40 52% 54%)',
                      transitionDuration: 'var(--duration-base)',
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openAuth("login")}
              className="font-body text-[13px] font-normal transition-all"
              style={{ border: '1px solid hsla(40,52%,54%,0.5)', color: 'hsl(40 52% 54%)', background: 'transparent', padding: '8px 20px', borderRadius: '9999px' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'hsla(40,52%,54%,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Login
            </button>
            <button
              onClick={() => openAuth("signup")}
              className="font-body text-[13px] font-semibold transition-all"
              style={{ background: 'hsl(40 52% 54%)', color: 'hsl(30 50% 4%)', padding: '9px 22px', borderRadius: '9999px', border: 'none', boxShadow: 'var(--shadow-gold-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'hsl(40 66% 71%)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'hsl(40 52% 54%)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Register Free
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: 'hsl(40 52% 54%)' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu — Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(15,10,5,0.55)',
          backdropFilter: 'blur(8px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
          touchAction: 'none',
        }}
      />
      {/* Panel */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(340px, 88vw)',
          zIndex: 201,
          background: '#1A0808',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: mobileOpen
            ? 'transform 380ms cubic-bezier(0.25,0.1,0,1), visibility 0s'
            : 'transform 380ms cubic-bezier(0.25,0.1,0,1), visibility 0s 380ms',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={LOGO_URL} alt="Logo" style={{ height: '38px', objectFit: 'contain' }} />
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1, overflowY: 'auto' }}>
          {navLinks.map((link, i) => {
            const isActive = link.children ? isServiceActive : location.pathname === link.to;

            if (link.children) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="font-display block transition-all w-full text-left flex items-center justify-between"
                    style={{
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      fontSize: '28px', fontWeight: 300,
                      color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                      letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer',
                      opacity: mobileOpen ? 1 : 0,
                      transform: mobileOpen ? 'translateX(0)' : 'translateX(-16px)',
                      transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                      transitionDuration: '300ms',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-5 h-5" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 300ms ease' }} />
                  </button>
                  <div style={{
                    maxHeight: mobileServicesOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                  }}>
                    {link.children.map(child => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="font-body block text-[16px] font-light"
                        style={{
                          padding: '10px 0 10px 20px',
                          color: location.pathname === child.to ? '#C9A84C' : 'rgba(255,255,255,0.55)',
                          textDecoration: 'none',
                          borderLeft: '1px solid rgba(201,168,76,0.2)',
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-display block transition-all"
                style={{
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '28px', fontWeight: 300,
                  color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  position: 'relative',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-16px)',
                  transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'cubic-bezier(0.25,0.1,0,1)',
                }}
              >
                {isActive && (
                  <span style={{
                    position: 'absolute', left: '-28px', top: '50%', transform: 'translateY(-50%)',
                    width: '3px', height: '24px', background: '#C9A84C', borderRadius: '2px',
                  }} />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '24px 28px', borderTop: '1px solid rgba(201,168,76,0.12)', display: 'flex', gap: '12px', flexShrink: 0 }}>
          <button
            onClick={() => openAuth("login")}
            className="font-body"
            style={{ flex: 1, height: '46px', background: 'transparent', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '999px', fontSize: '14px', color: '#C9A84C', cursor: 'pointer' }}
          >
            Login
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="font-body"
            style={{ flex: 1, height: '46px', background: 'linear-gradient(135deg, #C9A84C, #B8923A)', border: 'none', borderRadius: '999px', fontSize: '14px', fontWeight: 600, color: '#0F0A05', cursor: 'pointer', boxShadow: '0 4px 16px rgba(201,168,76,0.3)' }}
          >
            Register Free
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
