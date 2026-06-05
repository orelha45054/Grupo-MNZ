import { motion } from "framer-motion";
import { colors } from "../theme/colors";
import { Label, SectionTitle, Highlight } from "./shared/Typography";

const MINI_STATS = [
  { value: "7", label: "Empresas" },
  { value: "5+", label: "Cidades" },
  { value: "200+", label: "Colaboradores" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden section"
      style={{ background: colors.bg }}
    >
      <div className="container">
        <div className="about-grid">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="absolute w-full h-full"
              style={{
                top: "-1rem",
                left: "-1rem",
                border: `1px solid ${colors.grayLine}`,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1758025554726-50b7ed346394?w=800&h=700&fit=crop&auto=format"
              alt="Interior de loja do Grupo MNZ"
              className="w-full relative z-10"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
            />
            {/* Selo "30+" — agora prata em vez de dourado */}
            <div
              className="absolute z-20"
              style={{
                bottom: "-2rem",
                right: "-2rem",
                background: colors.silver,
                width: 160,
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: colors.bg,
                  lineHeight: 1,
                }}
              >
                30+
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: colors.bg,
                  textTransform: "uppercase",
                  marginTop: 6,
                }}
              >
                Anos de história
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <Label>Sobre o Grupo</Label>
            <SectionTitle>
              Construído sobre <Highlight>propósito, pessoas</Highlight> e
              inovação.
            </SectionTitle>
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: colors.textBody,
                  marginBottom: "1.5rem",
                }}
              >
                O Grupo MNZ nasceu em 1995 como uma pequena loja de moda em
                Palotina, no oeste do Paraná. Com visão, trabalho e foco no
                cliente, ao longo de três décadas expandiu-se para um conglomerado
                omnichannel presente em múltiplas cidades.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: colors.textBody,
                  marginBottom: "2.5rem",
                }}
              >
                Hoje, com sete marcas e centenas de colaboradores, o Grupo MNZ é
                referência regional em experiência de compra, operação digital e
                desenvolvimento de comunidades — integrando liderança local com
                marcas nacionais e globais.
              </p>
            </div>
            <div className="mini-stats">
              {MINI_STATS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderTop: `1px solid ${colors.grayLine}`,
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "2rem",
                      color: colors.silver,
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      color: colors.textMuted,
                      textTransform: "uppercase",
                      marginTop: 6,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
