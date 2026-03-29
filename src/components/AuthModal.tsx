import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const LOGO_URL = "https://res.cloudinary.com/dvmrhs2ek/image/upload/v1774700099/wjibi9xge8sdyxqhi09a.png";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode: "login" | "signup";
}

const AuthModal = ({ open, onClose, initialMode }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [otpSent, setOtpSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gender, setGender] = useState<"Bride" | "Groom">("Bride");

  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setOtpSent(false);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open, initialMode]);

  if (!open) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '42px',
    padding: '0 14px',
    borderRadius: '10px',
    border: '1px solid rgba(201,168,76,0.2)',
    background: '#FBF5EB',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    color: '#0F0A05',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#C9A84C';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.12)';
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const btnHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(-1px)';
    e.currentTarget.style.filter = 'brightness(1.08)';
  };
  const btnLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.filter = 'brightness(1)';
  };
  const btnActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(0.97)';
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ padding: '16px' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'rgba(15,10,5,0.75)',
          backdropFilter: 'blur(8px)',
          opacity: visible ? 1 : 0,
        }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full transition-all duration-300 overflow-hidden"
        style={{
          maxWidth: 'min(520px, 96vw)',
          maxHeight: '90svh',
          overflowY: 'auto',
          background: '#FFFDF8',
          borderRadius: '24px',
          boxShadow: '0 32px 80px rgba(15,10,5,0.45), 0 0 0 1px rgba(201,168,76,0.2)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.95)',
          transitionTimingFunction: 'var(--ease-spring)',
          scrollbarWidth: 'thin' as any,
          scrollbarColor: 'rgba(201,168,76,0.3) transparent',
        }}
      >
        {/* Header */}
        <div
          className="relative flex items-center justify-between"
          style={{
            background: 'linear-gradient(135deg, #2D0A0A 0%, #5A1A1A 60%, #3D1808 100%)',
            padding: '18px clamp(20px,5vw,28px)',
            minHeight: '68px',
          }}
        >
          <img src={LOGO_URL} alt="Kammavaari" style={{ height: '28px' }} />
          <p className="font-accent text-[13px] hidden sm:block" style={{ color: 'rgba(201,168,76,0.85)' }}>
            Find Your Perfect Match
          </p>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '18px', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex" style={{ padding: '0 clamp(16px,4vw,28px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setOtpSent(false); }}
              className="flex-1 font-body text-[13px] transition-all"
              style={{
                padding: '12px 0',
                background: 'none', border: 'none',
                borderBottom: mode === m ? '2px solid #C9A84C' : '2px solid transparent',
                color: mode === m ? '#5C4510' : '#9B7A2A',
                fontWeight: 400, letterSpacing: '0.04em', cursor: 'pointer',
              }}
            >
              {m === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div style={{ padding: '16px clamp(16px,4vw,28px) 14px' }}>
          {mode === "login" ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>Mobile Number / Email</label>
                <input type="text" placeholder="Enter your mobile or email" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              {otpSent && (
                <div style={{ animation: 'fadeUp 0.3s var(--ease-luxury)' }}>
                  <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>Enter OTP</label>
                  <input type="text" maxLength={6} placeholder="6-digit OTP" style={{ ...inputStyle, textAlign: 'center', letterSpacing: '0.5em' }} onFocus={focusHandler} onBlur={blurHandler} />
                </div>
              )}
              <button
                className="w-full font-body text-[13px] font-semibold btn-gold"
                style={{
                  height: '44px',
                  background: 'linear-gradient(135deg, #C9A84C 0%, #B8923A 100%)',
                  border: 'none', borderRadius: '10px', color: '#0F0A05',
                  letterSpacing: '0.05em', cursor: 'pointer', marginTop: '6px',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
                }}
                onClick={() => setOtpSent(true)}
                onMouseEnter={btnHover} onMouseLeave={btnLeave} onMouseDown={btnActive}
              >
                {otpSent ? "Verify & Login" : "Request OTP"}
              </button>

              <div className="flex items-center gap-3" style={{ marginTop: '4px' }}>
                <div className="flex-1 h-[1px]" style={{ background: 'rgba(201,168,76,0.15)' }} />
                <span className="font-body text-[11px]" style={{ color: '#C4B49E' }}>OR</span>
                <div className="flex-1 h-[1px]" style={{ background: 'rgba(201,168,76,0.15)' }} />
              </div>

              <button
                className="w-full flex items-center justify-center gap-2.5 font-body text-[13px] btn-outline-gold"
                style={{
                  height: '42px', background: 'white',
                  border: '1px solid rgba(201,168,76,0.25)', borderRadius: '10px',
                  color: '#2C1F10', cursor: 'pointer',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                Continue with Google
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>Profile Created By</label>
                <select style={{ ...inputStyle, appearance: 'auto' as any }} onFocus={focusHandler as any} onBlur={blurHandler as any}>
                  <option>Self</option>
                  <option>Parent/Guardian</option>
                  <option>Sibling</option>
                  <option>Relative</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>First Name</label>
                  <input type="text" placeholder="First name" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
                </div>
                <div>
                  <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>Last Name</label>
                  <input type="text" placeholder="Last name" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
                </div>
              </div>
              <div>
                <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>I am looking for</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(["Bride", "Groom"] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className="font-body text-[13px] font-medium transition-all"
                      style={{
                        height: '40px', borderRadius: '10px', cursor: 'pointer',
                        border: gender === g ? 'none' : '1px solid rgba(201,168,76,0.2)',
                        background: gender === g ? 'linear-gradient(135deg, #C9A84C, #B8923A)' : '#FBF5EB',
                        color: gender === g ? '#0F0A05' : '#9B7A2A',
                        boxShadow: gender === g ? '0 4px 16px rgba(201,168,76,0.3)' : 'none',
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-body text-[11px] tracking-[0.08em] uppercase block" style={{ color: '#7A6550', fontWeight: 400, marginBottom: '4px' }}>Mobile Number</label>
                <input type="tel" placeholder="+91 98765 43210" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <button
                className="w-full font-body text-[13px] font-semibold btn-gold"
                style={{
                  height: '44px',
                  background: 'linear-gradient(135deg, #C9A84C 0%, #B8923A 100%)',
                  border: 'none', borderRadius: '10px', color: '#0F0A05',
                  letterSpacing: '0.05em', cursor: 'pointer', marginTop: '2px',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
                }}
                onMouseEnter={btnHover} onMouseLeave={btnLeave} onMouseDown={btnActive}
              >
                Register & Send OTP
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="text-center font-body text-[11px]"
          style={{
            borderTop: '1px solid rgba(201,168,76,0.1)',
            padding: '10px clamp(16px,4vw,28px)',
            background: '#FBF5EB',
            color: '#C4B49E',
            fontWeight: 300,
          }}
        >
          By continuing, you agree to our{' '}
          <a href="#" className="underline" style={{ color: '#9B7A2A' }}>Terms of Use</a>
          {' & '}
          <a href="#" className="underline" style={{ color: '#9B7A2A' }}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default AuthModal;
