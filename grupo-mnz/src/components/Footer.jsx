import { colors } from "../theme/colors";
import { FOOTER_SITES } from "../data/content";
import Logo from "./shared/Logo";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        background: colors.bgDeep,
        borderTop: `1px solid ${colors.grayLine}`,
      }}
    >
      <div className="container">
        <div className="footer-inner">
          <Logo dim />
          <div className="footer-links">
            {FOOTER_SITES.map((site) => (
              <a
                key={site}
                href={`https://www.${site}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: colors.textFaint,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.silver)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textFaint)
                }
              >
                {site}
              </a>
            ))}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(240,236,228,0.2)",
            }}
          >
            © {new Date().getFullYear()} Grupo MNZ
          </div>
        </div>
      </div>
    </footer>
  );
}
