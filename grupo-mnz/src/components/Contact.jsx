import { motion } from "framer-motion";
import { MapPin, Globe, Instagram } from "lucide-react";
import { colors } from "../theme/colors";
import { LOCATIONS, CONTACT_PLATFORMS } from "../data/content";
import { Label, SectionTitle, Highlight } from "./shared/Typography";

const ICONS = { globe: Globe, instagram: Instagram };

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden section"
      style={{ background: colors.bg }}
    >
      {/* Linha superior decorativa */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(216,212,204,0.25), transparent)",
        }}
      />

      <div className="container">
        <div className="contact-grid">
          {/* Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Label>Contato</Label>
            <SectionTitle>
              Vamos <Highlight>conversar?</Highlight>
            </SectionTitle>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: colors.textBody,
                margin: "1.5rem 0 3rem",
              }}
            >
              Para parcerias comerciais, fornecedores, imprensa ou qualquer
              assunto relacionado ao Grupo MNZ, entre em contato.
            </p>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(240,236,228,0.3)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Nossas plataformas
            </div>
            <div className="contact-links">
              {CONTACT_PLATFORMS.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    style={{ textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget
                        .querySelectorAll("[data-text]")
                        .forEach((n) => (n.style.color = colors.textMain));
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget
                        .querySelectorAll("[data-text]")
                        .forEach((n) => (n.style.color = colors.textMuted));
                    }}
                  >
                    <Icon
                      size={14}
                      style={{ color: colors.goldSoft, flexShrink: 0 }}
                    />
                    <span
                      data-text
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: colors.textMuted,
                        transition: "color 0.2s",
                      }}
                    >
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Direita — cidades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(240,236,228,0.3)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Nossas cidades
            </div>
            <div className="contact-cities" style={{ background: colors.grayLine }}>
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.city}
                  className="flex gap-4"
                  style={{ background: colors.bg, padding: "1.5rem" }}
                >
                  <MapPin
                    size={16}
                    style={{ color: colors.goldSoft, flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        color: colors.textMain,
                        marginBottom: 4,
                      }}
                    >
                      {loc.city}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.82rem",
                        color: colors.textMuted,
                        marginBottom: 4,
                      }}
                    >
                      {loc.address}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: colors.goldSoft,
                      }}
                    >
                      {loc.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                marginTop: "1.5rem",
                height: 180,
                background: colors.bgCard,
                border: `1px solid ${colors.grayLine}`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1601785486643-23fc429f18e0?w=600&h=200&fit=crop&auto=format"
                alt="Palotina, Paraná"
                className="w-full h-full object-cover"
                style={{ opacity: 0.2 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    size={28}
                    style={{ color: colors.goldSoft, margin: "0 auto 8px" }}
                  />
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: colors.textMuted,
                      textTransform: "uppercase",
                    }}
                  >
                    Palotina · Paraná · Brasil
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
