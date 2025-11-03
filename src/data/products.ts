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
