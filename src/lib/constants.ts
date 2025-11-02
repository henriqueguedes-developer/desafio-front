// src/lib/constants.ts

// Classes CSS reutilizáveis
export const CONTAINER_CLASSES = "container mx-auto px-4 md:px-16 lg:px-24";

// Cores do tema
export const COLORS = {
  primary: "#E57200",
  primaryHover: "#CC6600",
  secondary: "#A75897",
  secondaryHover: "#80276C",
  text: {
    primary: "#121212",
    secondary: "#4C4C4C",
    tertiary: "#707372",
    light: "#EBEBEB",
  },
  background: {
    light: "#F8F8F8",
    gray: "#5A5A5A",
    dark: "#4C4D4C",
  },
  border: "#D5D7D8",
} as const;

// Itens de navegação
export const NAV_ITEMS = [
  { label: "Produtos", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Catálogos", href: "#" },
] as const;

// Links do footer
export const FOOTER_LINKS = {
  institutional: [
    { label: "Sobre nós", href: "#" },
    { label: "Trabalhe conosco", href: "#" },
  ],
  catalogs: [
    { label: "Catálogo geral", href: "#" },
    { label: "Linha Orthopedic", href: "#" },
    { label: "Linha Sports", href: "#" },
    { label: "Linha Special Cares", href: "#" },
    { label: "Catálogo Foot Care", href: "#" },
    { label: "Catálogo Acessibilidade", href: "#" },
  ],
  productLines: [
    { label: "Orthopedic", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Special Cares", href: "#" },
  ],
} as const;

// Informações de contato
export const CONTACT_INFO = {
  phone: "+55 48 3333 3333",
  emailSAC: "sac@loremipsum.com.br",
  emailRP: "rp@loremipsum.com.br",
} as const;

// Redes sociais
export const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Facebook", href: "#", icon: "facebook" },
] as const;
