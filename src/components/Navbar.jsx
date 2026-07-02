// Navbar.jsx — Ratan Chaat Bhandar
// Responsive navbar with mobile hamburger menu

import { useState } from "react";

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Our Chaat", href: "#menu" },
  { name: "Visit Us",  href: "#visit" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = {
    color: "#ccc",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13,
    textDecoration: "none",
    letterSpacing: 1,
    padding: "8px 0",
    display: "block",
    transition: "color 0.3s",
  };

  return (
    <nav
      style={{
        background: "#2D2D2D",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(16px, 4vw, 22px)",
              fontWeight: 700,
              color: "#C48A3A",
              lineHeight: 1.1,
            }}
          >
            Ratan Chaat Bhandar
          </div>
          <div
            style={{
              fontSize: 9,
              color: "#aaa",
              letterSpacing: 3,
              textTransform: "uppercase",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Since 1978 · RCB
          </div>
        </a>

        {/* Desktop links */}
        <ul className="rcb-desktop-links"
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={linkStyle}
                onMouseEnter={e => (e.target.style.color = "#C48A3A")}
                onMouseLeave={e => (e.target.style.color = "#ccc")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rcb-hamburger"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid #C48A3A",
            borderRadius: 4,
            padding: "6px 10px",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isOpen ? (
            <span style={{ color: "#C48A3A", fontSize: 18, lineHeight: 1 }}>✕</span>
          ) : (
            <>
              <span style={{ display: "block", width: 22, height: 2, background: "#C48A3A" }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#C48A3A" }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#C48A3A" }} />
            </>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="rcb-mobile-menu"
          style={{
            background: "#1f1f1f",
            borderTop: "1px solid #3a3a3a",
            padding: "12px 24px 20px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ borderBottom: "1px solid #333" }}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ ...linkStyle, fontSize: 15, padding: "14px 0", color: "#ddd" }}
                  onMouseEnter={e => (e.target.style.color = "#C48A3A")}
                  onMouseLeave={e => (e.target.style.color = "#ddd")}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 16 }}>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  background: "#C48A3A",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "11px 24px",
                  borderRadius: 30,
                  textDecoration: "none",
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                📞 WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Media query styles */}
      <style>{`
        @media (max-width: 768px) {
          .rcb-desktop-links { display: none !important; }
          .rcb-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .rcb-mobile-menu { display: none !important; }
          .rcb-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;