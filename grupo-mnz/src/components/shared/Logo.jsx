import { colors } from "../../theme/colors";

// Logotipo do Grupo MNZ.
// dim = versão mais discreta, usada no rodapé.
export default function Logo({ dim = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: 36,
          height: 36,
          border: `1.5px solid ${dim ? colors.grayLine : colors.goldFaint}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: colors.silver,
          }}
        >
          M
        </span>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: dim ? "0.95rem" : "1.05rem",
            color: dim ? "rgba(240,236,228,0.7)" : colors.textMain,
            letterSpacing: "0.12em",
            lineHeight: 1,
          }}
        >
          GRUPO MNZ
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5rem",
            color: colors.goldSoft,
            letterSpacing: "0.22em",
            marginTop: 3,
          }}
        >
          PALOTINA · PARANÁ
        </div>
      </div>
    </div>
  );
}
