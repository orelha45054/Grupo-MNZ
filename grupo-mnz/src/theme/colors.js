// ─────────────────────────────────────────────
// PALETA CENTRAL DO GRUPO MNZ
// Mude as cores aqui e elas se aplicam ao site todo.
//
// Conceito: fundo escuro mantido, branco e tons de cinza
// como cor principal, e o dourado reduzido a pequenos acentos
// (linhas finas, ícones, tags e detalhes).
// ─────────────────────────────────────────────

export const colors = {
  // Fundos (do mais escuro ao mais claro)
  bgDeep: "#050505", // rodapé
  bg: "#080808", // fundo principal
  bgAlt: "#0c0c0c", // seções alternadas
  bgCard: "#111111", // cartões / caixas

  // Texto
  textMain: "#f0ece4", // títulos e texto de destaque (quase branco)
  textBody: "rgba(240,236,228,0.65)", // parágrafos
  textMuted: "rgba(240,236,228,0.45)", // legendas
  textFaint: "rgba(240,236,228,0.25)", // texto bem discreto

  // Cinza / prata — agora a cor de destaque principal
  silver: "#d8d4cc", // destaque claro (números, títulos)
  gray: "#888880", // links de navegação
  grayLine: "rgba(240,236,228,0.12)", // linhas e bordas neutras

  // Dourado — agora só em pequenos acentos
  gold: "#C9A84C", // dourado cheio (usar pouco: ícones, detalhes)
  goldSoft: "rgba(201,168,76,0.5)", // dourado suave
  goldFaint: "rgba(201,168,76,0.18)", // dourado bem discreto (linhas)
  goldLine: "rgba(201,168,76,0.12)", // linhas douradas finas
  goldGlow: "rgba(201,168,76,0.04)", // grid decorativo de fundo
};

// Cores usadas nos marcos da linha do tempo.
// Mantidas neutras/discretas para reduzir o dourado.
export const timelineColors = {
  foundation: "#d8d4cc",
  expansion: "#8BA888",
  innovation: "#7B8EC8",
  new: "#b8b4ac",
  milestone: "#d8d4cc",
  today: "#C9A84C", // só o marco "Hoje" mantém o dourado como destaque
};
