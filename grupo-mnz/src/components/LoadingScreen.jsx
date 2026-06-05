import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { colors } from "../theme/colors";

// Tela de carregamento inicial com barra de progresso animada.
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(Math.round((1 - Math.pow(1 - p, 2)) * 100));

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: 100,
        background: colors.bg,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        transition: "opacity 0.6s",
      }}
    >
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(216,212,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(216,212,204,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: fadeOut ? 0 : 0.5,
        }}
      />

      {/* Linhas decorativas verticais */}
      <div
        className="absolute top-0 left-1/2"
        style={{
          width: 1,
          height: 128,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, rgba(216,212,204,0.4))",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 1,
          height: 128,
          transform: "translateX(-50%)",
          background: "linear-gradient(to top, transparent, rgba(216,212,204,0.4))",
        }}
      />

      {/* Conteúdo central */}
      <div className="relative text-center">
        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
          style={{ marginBottom: "2rem" }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              border: `2px solid ${colors.silver}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: colors.silver,
              }}
            >
              M
            </span>
            {/* Borda animada — agora dourada bem sutil como acento */}
            <div
              className="absolute inset-0"
              style={{
                border: `2px solid ${colors.gold}`,
                clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
                opacity: 0.3,
              }}
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.8rem",
              color: colors.textMain,
              letterSpacing: "0.12em",
              marginBottom: "0.5rem",
            }}
          >
            GRUPO MNZ
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: colors.goldSoft,
              letterSpacing: "0.25em",
              marginBottom: "3rem",
            }}
          >
            PALOTINA · PARANÁ
          </div>
        </motion.div>

        {/* Barra de progresso — prata */}
        <div className="relative" style={{ width: 256, margin: "0 auto" }}>
          <div
            style={{
              height: 1,
              background: "rgba(216,212,204,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(to right, #b8b4ac, #f0ece4)",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              color: "rgba(240,236,228,0.3)",
              letterSpacing: "0.2em",
              marginTop: "1rem",
            }}
          >
            {progress}%
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(240,236,228,0.25)",
            letterSpacing: "0.05em",
            marginTop: "2rem",
          }}
        >
          30 anos construindo o varejo paranaense
        </motion.div>
      </div>
    </div>
  );
}
