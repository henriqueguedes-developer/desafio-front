// src/components/product-detail/RelatedProducts.tsx
import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { useCarousel } from "@/hooks/useCarousel";
import type { Product } from "@/types";

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts = memo(function RelatedProducts({
  products,
}: RelatedProductsProps) {
  const { 
    currentIndex, 
    canGoPrevious, 
    canGoNext, 
    handlePrevious, 
    handleNext, 
    itemsPerSlide 
  } = useCarousel({ 
    itemsCount: products.length, 
    itemsPerSlide: 6 
  });

  return (
    <div className="py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Título e Navegação */}
        <div className="flex items-center justify-between mb-3 md:mb-6">
          <h2
            className="text-[#4C4D4C] text-base md:text-2xl"
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            Conheça também
            <br />
            nossos outros produtos
          </h2>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="p-1 rounded-full border border-[#EBEBEB] bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4 text-[#4C4C4C]" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="p-1 rounded-full border border-[#EBEBEB] bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4 text-[#4C4C4C]" />
            </button>
          </div>
        </div>

        {/* Carrossel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-3 md:gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.min(itemsPerSlide, products.length))}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="shrink-0"
                style={{ 
                  width: `calc(${100 / Math.min(itemsPerSlide, products.length)}% - ${Math.min(itemsPerSlide, products.length) > 1 ? (Math.min(itemsPerSlide, products.length) - 1) * 12 / Math.min(itemsPerSlide, products.length) : 0}px)` 
                }}
              >
                <ProductCard product={product} variant="related" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
