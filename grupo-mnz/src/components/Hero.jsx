import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { colors } from "../theme/colors";
import { scrollTo } from "./shared/scrollTo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden hero"
      style={{ background: colors.bg }}
    >
      {/* Fundo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576035131994-1d947f256ed8?w=1920&h=1080&fit=crop&auto=format"
          alt="Sede corporativa"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,1) 100%)",
          }}
        />
      </div>

      {/* Grid decorativo (dourado bem discreto) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${colors.goldGlow} 1px, transparent 1px), linear-gradient(90deg, ${colors.goldGlow} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Linha vertical decorativa */}
      <div
        className="absolute left-16 top-0 bottom-0 hero-vline"
        style={{
          width: 1,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container w-full">
        <div style={{ maxWidth: "56rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: colors.goldSoft,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            ▸ Fundado em 1995 · Palotina, Paraná
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 1.05,
              color: colors.textMain,
              marginBottom: "0.4rem",
            }}
          >
            Um grupo.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 1.05,
              color: colors.silver,
              marginBottom: "1.5rem",
            }}
          >
            Sete empresas.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)",
              lineHeight: 1.2,
              color: "rgba(240,236,228,0.5)",
              marginBottom: "2.5rem",
            }}
          >
            Uma força no varejo do Paraná.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: colors.textBody,
              maxWidth: 540,
              marginBottom: "2.5rem",
            }}
          >
            Do varejo físico ao e-commerce, da confecção ao marketing digital — o
            Grupo MNZ conecta marcas, pessoas e comunidades no oeste do Paraná há
            mais de 30 anos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#empresas")}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.bg,
                background: colors.silver,
                border: "none",
                cursor: "pointer",
                padding: "14px 32px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.silver)}
            >
              Conheça as Empresas
            </button>
            <button
              onClick={() => scrollTo("#sobre")}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.silver,
                background: "transparent",
                border: `1px solid ${colors.grayLine}`,
                cursor: "pointer",
                padding: "14px 32px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = colors.silver)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = colors.grayLine)
              }
            >
              Sobre o Grupo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll (acento dourado) */}
      <button
        onClick={() => scrollTo("#sobre")}
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          transform: "translateX(-50%)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: colors.goldSoft,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: colors.goldSoft }} />
      </button>
    </section>
  );
}
