import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { colors } from "../theme/colors";
import { NAV_LINKS } from "../data/content";
import { scrollTo } from "./shared/scrollTo";
import Logo from "./shared/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? `1px solid ${colors.grayLine}` : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container nav-bar">
        <button
          onClick={() => scrollTo("#inicio")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <Logo />
        </button>

        {/* Desktop */}
        <div className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                color: colors.gray,
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.textMain)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.gray)}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contato")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: colors.bg,
              background: colors.silver,
              border: "none",
              cursor: "pointer",
              padding: "8px 20px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = colors.silver)}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          style={{
            color: colors.silver,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(8,8,8,0.98)",
            borderTop: `1px solid ${colors.grayLine}`,
            padding: "1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setOpen(false);
              }}
              className="block w-full text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: colors.textMain,
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: `1px solid ${colors.grayLine}`,
                cursor: "pointer",
                padding: "12px 0",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
