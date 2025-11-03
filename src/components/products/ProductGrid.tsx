// src/components/products/ProductGrid.tsx
import { memo } from "react";
import { ProductGridPresentation } from "@/components/products/ProductGridPresentation";
import { mockProducts } from "@/data/products";

export const ProductGrid = memo(function ProductGrid() {
  return (
    <ProductGridPresentation products={mockProducts} />
  );
});
