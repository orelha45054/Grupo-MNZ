import { motion } from "framer-motion";
import { colors, timelineColors } from "../theme/colors";
import { TIMELINE, TIMELINE_LABELS } from "../data/content";
import { Label, SectionTitle, Highlight } from "./shared/Typography";

// Bloco de texto reutilizado nas versões desktop e mobile
function TextBlock({ item, color }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          color,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {TIMELINE_LABELS[item.type]}
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: "1.1rem",
          color: colors.textMain,
          lineHeight: 1.3,
          marginBottom: 10,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.85rem",
          lineHeight: 1.7,
          color: colors.textMuted,
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="historia" className="section" style={{ background: colors.bgAlt }}>
      <div className="container">
        <div style={{ marginBottom: "5rem" }}>
          <Label>Nossa Trajetória</Label>
          <SectionTitle>
            30 anos de <Highlight>história</Highlight>
          </SectionTitle>
        </div>

        <div className="relative timeline">
          {/* Linha central */}
          <div
            className="timeline-line"
            style={{
              width: 1,
              background:
                "linear-gradient(to bottom, transparent, rgba(216,212,204,0.25) 5%, rgba(216,212,204,0.25) 95%, transparent)",
            }}
          />

          <div>
            {TIMELINE.map((item, i) => {
              const isRight = i % 2 === 0;
              const color = timelineColors[item.type];

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="relative timeline-row"
                >
                  {/* Desktop — coluna esquerda */}
                  <div
                    className={`timeline-col-desktop ${
                      isRight ? "timeline-text-left" : "timeline-year-left"
                    }`}
                  >
                    {isRight ? (
                      <TextBlock item={item} color={color} />
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 800,
                          fontSize: "3rem",
                          color: "rgba(216,212,204,0.12)",
                          lineHeight: 1,
                        }}
                      >
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* Ponto central (desktop) */}
                  <div className="timeline-dot-desktop">
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: colors.bgAlt,
                        border: `2px solid ${color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div style={{ width: 8, height: 8, background: color }} />
                    </div>
                  </div>

                  {/* Desktop — coluna direita */}
                  <div
                    className={`timeline-col-desktop ${
                      isRight ? "timeline-year-right" : "timeline-text-right"
                    }`}
                  >
                    {isRight ? (
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 800,
                          fontSize: "3rem",
                          color: "rgba(216,212,204,0.12)",
                          lineHeight: 1,
                        }}
                      >
                        {item.year}
                      </div>
                    ) : (
                      <TextBlock item={item} color={color} />
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="timeline-mobile">
                    <div
                      className="timeline-dot-mobile"
                      style={{
                        width: 14,
                        height: 14,
                        background: colors.bgAlt,
                        border: `2px solid ${color}`,
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 800,
                          fontSize: "1.4rem",
                          color: "rgba(216,212,204,0.35)",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}
                      >
                        {item.year}
                      </div>
                      <TextBlock item={item} color={color} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
