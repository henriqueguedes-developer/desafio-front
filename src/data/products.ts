// src/data/products.ts
import type { Product } from "@/types";
import product1 from "@/assets/products/imagem1.png";
import product2 from "@/assets/products/imagem2.png";

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

// Helper function para buscar produto por ID
export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

// Helper function para buscar produtos relacionados
export const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
  return mockProducts
    .filter((product) => product.id !== productId)
    .slice(0, limit);
};
