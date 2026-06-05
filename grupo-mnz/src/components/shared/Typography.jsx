import { useState, useEffect, useRef } from "react";
import { colors } from "../../theme/colors";

// Rótulo pequeno acima dos títulos (ex.: "▸ SOBRE O GRUPO")
// O traço continua dourado como pequeno acento.
export function Label({ children }) {
  return (
    <div
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.28em",
        color: colors.goldSoft,
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      ▸ {children}
    </div>
  );
}

// Título de seção
export function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        lineHeight: 1.1,
        color: colors.textMain,
      }}
    >
      {children}
    </h2>
  );
}

// Trecho em destaque dentro dos títulos.
// Antes era dourado; agora é prata claro para reduzir o dourado.
export function Highlight({ children }) {
  return (
    <em style={{ color: colors.silver, fontStyle: "italic" }}>{children}</em>
  );
}

// Número que conta de 0 até o valor quando entra na tela.
export function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / 1800, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}
