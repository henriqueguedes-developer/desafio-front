// src/pages/HomePage.tsx
import { memo } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/hero/Hero";
import { ProductFamilies } from "@/components/product-families/ProductFamilies";
import { ProductGrid } from "@/components/products/ProductGrid";

export const HomePage = memo(function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <ProductFamilies />
      <ProductGrid />
    </MainLayout>
  );
});
