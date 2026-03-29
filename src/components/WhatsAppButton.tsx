import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed flex flex-col items-center gap-3" style={{ bottom: '24px', right: '16px', zIndex: 40 }}>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="rounded-full flex items-center justify-center transition-all"
        style={{
          width: '40px', height: '40px',
          background: 'hsl(40 52% 54%)',
          color: 'hsl(30 50% 4%)',
          boxShadow: 'var(--shadow-gold-sm)',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0)' : 'translateY(16px)',
          pointerEvents: showTop ? 'auto' : 'none',
          transitionDuration: '300ms',
        }}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919177036777?text=Hi%2C%20I%27m%20interested%20in%20Kammavaari%20Matrimony"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative rounded-full flex items-center justify-center transition-all group"
        style={{
          width: '48px', height: '48px',
          background: 'hsl(40 52% 54%)',
          boxShadow: 'var(--shadow-gold-md)',
        }}
      >
        <span className="absolute inset-[-6px] rounded-full pointer-events-none" style={{ border: '1px solid hsl(40 52% 54%)', animation: 'waPulse 2.5s ease-out infinite' }} />
        <svg viewBox="0 0 32 32" fill="white" className="w-[22px] h-[22px]">
          <path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.468.655 4.876 1.898 6.988L2 30l7.188-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.596a11.57 11.57 0 0 1-5.896-1.614l-.422-.252-4.372 1.146 1.168-4.264-.274-.438a11.56 11.56 0 0 1-1.778-6.174c0-6.396 5.204-11.6 11.6-11.6 6.396 0 11.6 5.204 11.6 11.6-.002 6.396-5.206 11.596-11.626 11.596zm6.362-8.686c-.348-.174-2.064-1.018-2.384-1.134-.32-.116-.552-.174-.784.174-.232.348-.898 1.134-1.102 1.366-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.586-.282-.678-.57-.586-.784-.596-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.928.436-.32.348-1.218 1.19-1.218 2.9 0 1.712 1.248 3.366 1.422 3.598.174.232 2.454 3.748 5.946 5.254.832.358 1.482.572 1.988.732.836.266 1.596.228 2.198.138.67-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.204-1.66-.088-.146-.32-.232-.668-.406z" />
        </svg>

        <span className="absolute right-[56px] top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-body text-[11px]" style={{ background: 'hsl(30 50% 4%)', color: 'white', padding: '6px 12px', borderRadius: '12px' }}>
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
