// Rola suavemente até a seção indicada (ex.: "#sobre")
export function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
