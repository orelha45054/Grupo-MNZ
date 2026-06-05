// ─────────────────────────────────────────────
// CONTEÚDO DO SITE
// Todos os textos, empresas, números e datas ficam aqui.
// Para atualizar o site, edite este arquivo.
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Empresas", href: "#empresas" },
  { label: "Números", href: "#numeros" },
  { label: "História", href: "#historia" },
  { label: "Contato", href: "#contato" },
];

export const COMPANIES = [
  {
    id: 1,
    name: "Oficina Concept",
    segment: "Moda Feminina & Masculina",
    since: "1995",
    cities: ["Palotina-PR", "Toledo-PR"],
    stores: 2,
    description:
      "Referência em moda premium no oeste paranaense, a Oficina Concept traz marcas como Levis, Fórum, Acostamento e Converse para um público que busca estilo e qualidade.",
    brands: ["Levis", "Fórum", "Acostamento", "Converse"],
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&h=400&fit=crop&auto=format",
    website: null,
    tag: "FUNDADORA DO GRUPO",
  },
  {
    id: 2,
    name: "Palotina Esportes",
    segment: "Esportes & Casual",
    since: "2001",
    cities: [
      "Palotina-PR",
      "Assis Chateaubriand-PR",
      "Toledo-PR",
      "Cascavel-PR",
      "Medianeira-PR",
    ],
    stores: 5,
    description:
      "Com mais de 700m² na matriz e 5 lojas espalhadas pelo Paraná, a Palotina Esportes é destino obrigatório para quem busca as melhores marcas esportivas do mercado.",
    brands: ["Nike", "Adidas", "Puma", "Asics", "Mizuno", "Oakley"],
    image:
      "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?w=600&h=400&fit=crop&auto=format",
    website: "https://www.palotinaesportes.com.br",
    tag: "5 LOJAS · MAIOR OPERAÇÃO",
  },
  {
    id: 3,
    name: "Carolina Calçados",
    segment: "Calçados & Acessórios",
    since: "2014",
    cities: ["Palotina-PR"],
    stores: 2,
    description:
      "Especializadas em calçados de qualidade para toda a família, as lojas Carolina Calçados oferecem as melhores marcas com atendimento personalizado.",
    brands: ["Nike", "Adidas", "Ferracini", "Vizzano", "Dakota", "Bebecê"],
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop&auto=format",
    website: null,
    tag: "CALÇADOS",
  },
  {
    id: 4,
    name: "Adiprime",
    segment: "Confecção & Uniformes",
    since: "2009",
    cities: ["Palotina-PR"],
    stores: 1,
    description:
      "Fábrica de uniformes esportivos, corporativos e brindes promocionais. Com 500m² e mais de 30 colaboradores, a Adiprime atende empresas e times em todo o Brasil.",
    brands: [],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&auto=format",
    website: "https://www.adiprime.com.br",
    tag: "CONFECÇÃO",
  },
  {
    id: 5,
    name: "Imperium Premiações",
    segment: "Prêmios & Brindes",
    since: "2022",
    cities: ["Palotina-PR"],
    stores: 1,
    description:
      "Especializada em troféus, prêmios corporativos e brindes personalizados para eventos e empresas de todos os segmentos. A empresa mais nova do grupo.",
    brands: [],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format",
    website: "https://www.imperiumpremiacoes.com.br",
    tag: "PRÊMIOS & TROFÉUS",
  },
  {
    id: 6,
    name: "Meinerz",
    segment: "Moda Fitness & Casual",
    since: "2009",
    cities: ["Paraná"],
    stores: 1,
    description:
      "Marca paranaense de moda fitness e casual com presença nacional. A Meinerz veste grandes clubes do Paraná e reúne performance e estilo em cada coleção.",
    brands: [],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
    website: "https://www.meinerzoficial.com.br",
    tag: "MARCA PARANAENSE",
  },
  {
    id: 7,
    name: "Agência MNZ",
    segment: "Marketing Digital & E-Commerce",
    since: "2019",
    cities: ["Palotina-PR"],
    stores: 1,
    description:
      "O motor digital do grupo. De 3 pessoas em 16m² para 15 profissionais em 110m², a Agência MNZ cuida de marketing, redes sociais, marketplace e e-commerce de todo o grupo.",
    brands: [],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
    website: "https://agenciamnz.com.br",
    tag: "DIGITAL & E-COMMERCE",
  },
];

export const STATS = [
  {
    value: 30,
    suffix: "+",
    label: "Anos de história",
    description: "Desde 1995, construindo o varejo paranaense",
  },
  {
    value: 7,
    suffix: "",
    label: "Empresas ativas",
    description: "Do varejo físico ao marketing digital",
  },
  {
    value: 14,
    suffix: "+",
    label: "Lojas físicas",
    description: "Espalhadas por cidades do oeste do Paraná",
  },
  {
    value: 200,
    suffix: "+",
    label: "Colaboradores",
    description: "Profissionais dedicados ao atendimento",
  },
  {
    value: 5,
    suffix: "",
    label: "Cidades atendidas",
    description: "Palotina, Toledo, Cascavel e mais",
  },
  {
    value: 6,
    suffix: "",
    label: "Sites de e-commerce",
    description: "Operações digitais integradas ao varejo",
  },
];

export const TIMELINE = [
  {
    year: "1995",
    title: "Fundação — Oficina Concept",
    description:
      "Abertura da Oficina Concept na Av. Presidente Kennedy, Palotina-PR. Uma loja de moda com 230m² que se tornaria a semente do grupo.",
    type: "foundation",
  },
  {
    year: "2001",
    title: "Palotina Esportes nasce",
    description:
      "Com mais de 700m², a Palotina Esportes chega para atender a crescente demanda por artigos esportivos de qualidade.",
    type: "expansion",
  },
  {
    year: "2006",
    title: "Primeira expansão — Assis Chateaubriand",
    description:
      "Palotina Esportes chega a Assis Chateaubriand com 450m². Início da estratégia de crescimento regional.",
    type: "expansion",
  },
  {
    year: "2009",
    title: "Duas marcas nascem",
    description:
      "A Adiprime (confecção) e a Meinerz (marca fitness) são lançadas, diversificando o portfólio para produção e branding próprio.",
    type: "innovation",
  },
  {
    year: "2010",
    title: "Palotina Esportes em Toledo",
    description:
      "Nova filial em Toledo com 480m², consolidando a presença na maior cidade do oeste do Paraná.",
    type: "expansion",
  },
  {
    year: "2014",
    title: "Carolina Calçados é fundada",
    description:
      "Abertura da Carolina Calçados com 450m² em Palotina, expandindo o portfólio para o segmento de calçados.",
    type: "new",
  },
  {
    year: "2016",
    title: "Cascavel — maior loja do grupo",
    description:
      "Palotina Esportes inaugura 1.300m² em Cascavel, tornando-se a maior unidade do grupo.",
    type: "milestone",
  },
  {
    year: "2019",
    title: "Era Digital — Agência MNZ",
    description:
      "Lançamento do e-commerce e criação da Agência MNZ. Com apenas 3 pessoas em 16m², o time digital do grupo era iniciado.",
    type: "innovation",
  },
  {
    year: "2021",
    title: "Palotina Esportes em Medianeira",
    description:
      "Quinta loja da Palotina Esportes inaugurada em Medianeira-PR com 476m².",
    type: "expansion",
  },
  {
    year: "2022",
    title: "Imperium Premiações",
    description:
      "Sétima empresa do grupo, focada em troféus, prêmios e brindes corporativos.",
    type: "new",
  },
  {
    year: "2023",
    title: "Oficina Concept chega a Toledo",
    description:
      "Expansão da Oficina Concept com filial em Toledo, completando a presença do grupo em múltiplas cidades.",
    type: "expansion",
  },
  {
    year: "Hoje",
    title: "Grupo MNZ — referência omnichannel",
    description:
      "Com 7 marcas, 14+ pontos de venda, 6 e-commerces e 200+ colaboradores, o Grupo MNZ segue crescendo.",
    type: "today",
  },
];

export const TIMELINE_LABELS = {
  foundation: "Fundação",
  expansion: "Expansão",
  innovation: "Inovação",
  new: "Nova empresa",
  milestone: "Marco",
  today: "Presente",
};

export const LOCATIONS = [
  {
    city: "Palotina — PR",
    address: "Av. Presidente Kennedy, Centro",
    note: "Matriz do Grupo MNZ",
  },
  {
    city: "Toledo — PR",
    address: "Múltiplas lojas",
    note: "Oficina Concept + Palotina Esportes",
  },
  {
    city: "Cascavel — PR",
    address: "Av. Brasil",
    note: "Palotina Esportes · 1.300m²",
  },
  {
    city: "Medianeira — PR",
    address: "Rua Argentina",
    note: "Palotina Esportes",
  },
];

export const CONTACT_PLATFORMS = [
  {
    label: "palotinaesportes.com.br",
    href: "https://www.palotinaesportes.com.br",
    icon: "globe",
  },
  {
    label: "meinerzoficial.com.br",
    href: "https://www.meinerzoficial.com.br",
    icon: "globe",
  },
  { label: "agenciamnz.com.br", href: "https://agenciamnz.com.br", icon: "globe" },
  { label: "@oficinaconcept.oficial", href: "#", icon: "instagram" },
];

export const FOOTER_SITES = [
  "palotinaesportes.com.br",
  "meinerzoficial.com.br",
  "adiprime.com.br",
  "carolinacalcados.com.br",
  "imperiumpremiacoes.com.br",
  "agenciamnz.com.br",
];
