// src/data/products.ts
import type { Product } from "@/types";
import product1 from "@/assets/products/imagem1.png";
import product2 from "@/assets/products/imagem2.png";

// Tipo extendido para detalhes do produto
export interface ProductDetail extends Omit<Product, 'colors' | 'sizes'> {
  images: string[];
  codes: string[];
  fullDescription: string;
  level?: string;
  colors: { name: string; value: string }[];
  model: string;
  sizes: string[];
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 2,
    name: "Órtese Soft Curta sem Polegar",
    code: "OR1066",
    image: product2,
    isNew: true,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 3,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product1,
    isNew: false,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 4,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 5,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product1,
    isNew: true,
    family: "Ortho Recovery",
    category: "Órtese",
  },
  {
    id: 6,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product2,
    isNew: true,
    family: "Air Flex",
    category: "Órtese",
  },
  {
    id: 7,
    name: "Órtese Soft Longa",
    code: "OR1067",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 8,
    name: "Órtese Premium Plus",
    code: "OR1068",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 9,
    name: "Órtese Advanced",
    code: "OR1069",
    image: product1,
    isNew: false,
    family: "Ortho Recovery",
    category: "Órtese",
  },
  {
    id: 10,
    name: "Órtese Pro Flex",
    code: "OR1070",
    image: product2,
    isNew: true,
    family: "Air Flex",
    category: "Órtese",
  },
  {
    id: 11,
    name: "Órtese Ultra Comfort",
    code: "OR1071",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 12,
    name: "Órtese Support Max",
    code: "OR1072",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 13,
    name: "Órtese Active Care",
    code: "OR1073",
    image: product1,
    isNew: false,
    family: "Ortho Recovery",
    category: "Órtese",
  },
  {
    id: 14,
    name: "Órtese FlexiGuard",
    code: "OR1074",
    image: product2,
    isNew: true,
    family: "Air Flex",
    category: "Órtese",
  },
  {
    id: 15,
    name: "Órtese Dynamic Pro",
    code: "OR1075",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 16,
    name: "Órtese ErgoFit",
    code: "OR1076",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 17,
    name: "Órtese ThermoGuard",
    code: "OR1077",
    image: product1,
    isNew: false,
    family: "Ortho Recovery",
    category: "Órtese",
  },
  {
    id: 18,
    name: "Órtese SportActive",
    code: "OR1078",
    image: product2,
    isNew: true,
    family: "Air Flex",
    category: "Órtese",
  },
  {
    id: 19,
    name: "Órtese Premium Care",
    code: "OR1079",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 20,
    name: "Órtese MediSupport",
    code: "OR1080",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 21,
    name: "Órtese StabilityPlus",
    code: "OR1081",
    image: product1,
    isNew: false,
    family: "Ortho Recovery",
    category: "Órtese",
  },
  {
    id: 22,
    name: "Órtese FlexPro Elite",
    code: "OR1082",
    image: product2,
    isNew: true,
    family: "Air Flex",
    category: "Órtese",
  },
  {
    id: 23,
    name: "Órtese ComfortMax",
    code: "OR1083",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo",
    category: "Órtese",
  },
  {
    id: 24,
    name: "Órtese ActiveGuard",
    code: "OR1084",
    image: product2,
    isNew: true,
    family: "Comfort Air",
    category: "Órtese",
  },
  {
    id: 25,
    name: "Órtese Recovery Plus",
    code: "OR1085",
    image: product1,
    isNew: false,
    family: "Ortho Recovery",
    category: "Órtese",
  },
];


export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};


export const getProductDetailById = (id: number): ProductDetail | undefined => {
  const product = getProductById(id);
  if (!product) return undefined;


  const template = mockProductDetails[1];
  return {
    ...template,
    id: product.id,
    family: product.family,
    image: product.image,
  };
};


export const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
  return mockProducts
    .filter((product) => product.id !== productId)
    .slice(0, limit);
};


export const mockProductDetails: Record<number, ProductDetail> = {
  1: {
    id: 1,
    name: "Órtese Splint Bilateral",
    code: "OR1065",
    image: product1,
    isNew: false,
    family: "Hidrolight Neo®",
    category: "Órtese",
    images: [product1, product2, product1, product2, product1, product2],
    codes: [
      "Código SKU OR83 Lado direito / Código SKU OR83 Lado esquerdo",
    ],
    fullDescription:
      "A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.",
    level: "Recuperação e tratamento de lesões GRAVES",
    colors: [{ name: "Preto", value: "#000000" }],
    model: "Bilateral",
    sizes: ["Único", "Especial"],
  },
};
