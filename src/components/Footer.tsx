import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const LOGO_URL = "https://res.cloudinary.com/dvmrhs2ek/image/upload/v1774700099/wjibi9xge8sdyxqhi09a.png";

const Footer = () => {
  return (
    <footer style={{ background: 'hsl(0 60% 11%)' }}>
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, hsl(40 52% 54%), transparent)' }} />
      <div className="h-[1px]" style={{ background: 'hsla(40,52%,54%,0.2)' }} />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="Kammavaari Matrimony" className="mb-4" style={{ height: '36px', filter: 'brightness(0.9)' }} />
            <p className="font-body font-light text-[13px] leading-[1.75] mb-6 line-clamp-2 sm:line-clamp-none" style={{ color: 'rgba(255,255,255,0.55)' }}>
              A trusted community matrimony platform helping families find the perfect match with verified profiles and personalized matchmaking.
            </p>
            <div className="flex" style={{ gap: '12px' }}>
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all" style={{ border: '1px solid hsla(40,52%,54%,0.3)', color: 'hsl(40 52% 54%)', transitionDuration: 'var(--duration-fast)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'hsl(40 52% 54%)'; e.currentTarget.style.color = 'hsl(30 50% 4%)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'hsl(40 52% 54%)'; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Services: side-by-side on mobile */}
          <div className="grid grid-cols-2 gap-6 sm:contents">
            <div>
              <h4 className="eyebrow mb-5" style={{ color: 'hsl(40 52% 54%)' }}>Quick Links</h4>
              <ul className="space-y-3">
                {[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Gallery", to: "/gallery" }, { label: "Premium Plans", to: "/premium-plans" }].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-body font-light text-[13px] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'hsl(40 66% 71%)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow mb-5" style={{ color: 'hsl(40 52% 54%)' }}>Services</h4>
              <ul className="space-y-3">
                {["Verified Profiles", "Dedicated RM", "Privacy Settings", "Success Stories"].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body font-light text-[13px] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'hsl(40 66% 71%)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5" style={{ color: 'hsl(40 52% 54%)' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-body font-light text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Phone className="w-4 h-4 shrink-0" style={{ color: 'hsl(40 52% 54%)' }} /> +91-9177036777
              </li>
              <li className="flex items-center gap-2 font-body font-light text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'hsl(40 52% 54%)' }} /> info@kammavaari.com
              </li>
              <li className="flex items-start gap-2 font-body font-light text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(40 52% 54%)' }} /> Plot No 1282, Road No 64, Jubilee Hills, Hyderabad
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="font-body font-light text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Kammavaari Matrimony. All rights reserved.
          </p>
          <p className="font-body font-light text-[11px] mt-1.5" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
            Designed & Developed by{' '}
            <a
              href="https://www.thedreamteamservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'rgba(201,168,76,0.5)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(201,168,76,0.8)'; e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(201,168,76,0.5)'; e.currentTarget.style.textDecoration = 'none'; }}
            >
              DREAM TEAM SERVICES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
