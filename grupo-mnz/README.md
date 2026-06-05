# Grupo MNZ — Site Institucional

Site de página única do Grupo MNZ (Palotina, Paraná).
Feito em **React + JavaScript + CSS** com Vite.

## Como rodar

Você precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
# 1. Instalar as dependências (só na primeira vez)
npm install

# 2. Rodar em modo desenvolvimento (abre em http://localhost:5173)
npm run dev

# 3. Gerar a versão final para publicar (cria a pasta "dist")
npm run build
```

## Estrutura das pastas

```
grupo-mnz/
├── index.html              → página base
├── package.json            → dependências do projeto
├── vite.config.js          → configuração do Vite
└── src/
    ├── main.jsx            → ponto de entrada
    ├── App.jsx             → monta todas as seções na ordem
    │
    ├── data/
    │   └── content.js      → TODOS OS TEXTOS (empresas, números, datas, contatos)
    │                         Edite aqui para atualizar o conteúdo do site.
    │
    ├── theme/
    │   └── colors.js       → TODAS AS CORES em um só lugar.
    │                         Mude aqui para ajustar a paleta do site inteiro.
    │
    ├── components/         → cada seção é um arquivo separado
    │   ├── Navbar.jsx      → menu fixo no topo
    │   ├── Hero.jsx        → primeira tela (título principal)
    │   ├── About.jsx       → seção "Sobre o Grupo"
    │   ├── Companies.jsx   → cards das 7 empresas
    │   ├── Stats.jsx       → números (anos, lojas, etc.)
    │   ├── Timeline.jsx    → linha do tempo / história
    │   ├── Contact.jsx     → contato e cidades
    │   ├── Footer.jsx      → rodapé
    │   ├── LoadingScreen.jsx → tela de carregamento inicial
    │   └── shared/         → peças reutilizadas em várias seções
    │       ├── Logo.jsx
    │       ├── Typography.jsx  → Label, SectionTitle, Highlight, CountUp
    │       └── scrollTo.js     → rolagem suave entre seções
    │
    └── styles/
        ├── fonts.css       → importa as fontes do Google
        └── global.css      → estilos e layout (grades, responsivo, etc.)
```

## Onde mudar cada coisa

| Quero mudar...                | Vá em...                          |
| ----------------------------- | --------------------------------- |
| Texto de uma empresa          | `src/data/content.js`             |
| Os números das estatísticas   | `src/data/content.js`             |
| Cores do site (dourado, etc.) | `src/theme/colors.js`             |
| Layout / espaçamentos         | `src/styles/global.css`           |
| Uma seção específica          | o arquivo dela em `src/components` |

## Observações

- A paleta foi ajustada para usar **branco e tons de cinza** como cor principal,
  com o **dourado apenas em pequenos acentos** (ícones, linhas finas e detalhes).
- As imagens vêm do Unsplash via link. Para usar imagens próprias, troque as URLs
  em `src/data/content.js` (empresas) e nos componentes `Hero.jsx`, `About.jsx`
  e `Contact.jsx`.
```
