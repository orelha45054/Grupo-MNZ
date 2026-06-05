import { motion } from "framer-motion";
import { colors } from "../theme/colors";
import { STATS } from "../data/content";
import { Label, SectionTitle, Highlight, CountUp } from "./shared/Typography";

export default function Stats() {
  return (
    <section
      id="numeros"
      className="relative overflow-hidden section"
      style={{ background: colors.bg }}
    >
      {/* Grid decorativo de fundo (dourado bem discreto) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container">
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <Label>Grupo em Números</Label>
          <SectionTitle>
            O tamanho de <Highlight>nossa força</Highlight>
          </SectionTitle>
        </div>

        <div className="stats-grid" style={{ background: colors.grayLine }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: colors.bg, padding: "2.5rem" }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: colors.silver,
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  color: colors.textMain,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  color: colors.textMuted,
                }}
              >
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
