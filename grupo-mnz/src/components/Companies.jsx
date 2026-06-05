import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { colors } from "../theme/colors";
import { COMPANIES } from "../data/content";
import { Label, SectionTitle, Highlight } from "./shared/Typography";

export default function Companies() {
  const [active, setActive] = useState(null);

  return (
    <section id="empresas" className="section" style={{ background: colors.bgAlt }}>
      <div className="container">
        {/* Header */}
        <div className="companies-header">
          <div>
            <Label>Portfólio de Negócios</Label>
            <SectionTitle>
              Nossas <Highlight>sete empresas</Highlight>
            </SectionTitle>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: colors.textMuted,
              maxWidth: 420,
            }}
          >
            Cada empresa foi construída com propósito — juntas formam um
            ecossistema omnichannel que atende o cliente em todos os momentos.
          </p>
        </div>

        {/* Grid */}
        <div className="companies-grid" style={{ background: colors.grayLine }}>
          {COMPANIES.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden"
              style={{ background: colors.bgAlt, cursor: "pointer" }}
              onMouseEnter={() => setActive(company.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Imagem */}
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover company-img"
                  style={{ opacity: active === company.id ? 0.45 : 0.3 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(12,12,12,1) 100%)",
                  }}
                />
                {/* Tag — mantém um toque dourado discreto */}
                <div
                  className="absolute"
                  style={{
                    top: "1rem",
                    left: "1rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: colors.goldSoft,
                    background: "rgba(8,8,8,0.85)",
                    padding: "4px 8px",
                    border: `1px solid ${colors.goldFaint}`,
                  }}
                >
                  {company.tag}
                </div>
                {/* Ano grande de fundo — agora prata translúcido */}
                <div
                  className="absolute"
                  style={{
                    top: "1rem",
                    right: "1rem",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "rgba(216,212,204,0.18)",
                    lineHeight: 1,
                  }}
                >
                  {company.since}
                </div>
              </div>

              {/* Conteúdo */}
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    color: "rgba(240,236,228,0.35)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {company.segment}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: colors.textMain,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {company.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: colors.textBody,
                    marginBottom: 16,
                  }}
                >
                  {company.description}
                </p>

                <div className="flex flex-wrap gap-4" style={{ marginBottom: 16 }}>
                  <div className="flex items-center" style={{ gap: 6 }}>
                    <Calendar size={12} style={{ color: colors.goldSoft }} />
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        color: colors.textMuted,
                        letterSpacing: "0.1em",
                      }}
                    >
                      Desde {company.since}
                    </span>
                  </div>
                  <div className="flex items-center" style={{ gap: 6 }}>
                    <MapPin size={12} style={{ color: colors.goldSoft }} />
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        color: colors.textMuted,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {company.stores} {company.stores > 1 ? "lojas" : "unidade"}
                    </span>
                  </div>
                </div>

                {company.brands.length > 0 && (
                  <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
                    {company.brands.slice(0, 4).map((brand) => (
                      <span
                        key={brand}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          color: colors.textMuted,
                          background: "rgba(240,236,228,0.04)",
                          border: `1px solid ${colors.grayLine}`,
                          padding: "3px 8px",
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                    {company.brands.length > 4 && (
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.6rem",
                          color: "rgba(240,236,228,0.3)",
                          padding: "3px 0",
                        }}
                      >
                        +{company.brands.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: colors.goldSoft,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.gold)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.goldSoft)
                    }
                  >
                    Visitar site <ExternalLink size={11} />
                  </a>
                )}
              </div>

              {/* Borda inferior animada — prata */}
              <div
                className="absolute transition-all duration-300"
                style={{
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: colors.silver,
                  transform: active === company.id ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
