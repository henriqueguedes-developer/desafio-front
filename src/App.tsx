// src/App.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "./components/hero/Hero";
import { ProductFamilies } from "./components/product-families/ProductFamilies";
import { ProductGrid } from "./components/products/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductFamilies />
      <ProductGrid />
      <Footer />
    </div>
  );
}