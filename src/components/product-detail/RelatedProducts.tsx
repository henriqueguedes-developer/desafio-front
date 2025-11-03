// src/components/product-detail/RelatedProducts.tsx
import { memo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types";

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts = memo(function RelatedProducts({
  products,
}: RelatedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerSlide = window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 3 : 2;
      setItemsPerSlide(newItemsPerSlide);
      setCurrentIndex(0); // Reset ao mudar o número de itens
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, products.length - itemsPerSlide);
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < products.length - itemsPerSlide;

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
              transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="shrink-0"
                style={{ width: `calc(${100 / itemsPerSlide}% - ${(itemsPerSlide - 1) * 12 / itemsPerSlide}px)` }}
              >
                <a
                  href={`/produto/${product.id}`}
                  className="group bg-white rounded-lg overflow-hidden border border-transparent hover:border-[#AEB7B9] transition-colors block"
                >
                  {/* Imagem */}
                  <div className="relative aspect-square bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2"
                    />
                    {product.isNew && (
                      <div
                        className="absolute top-1 right-1 bg-[#80276C] text-white px-2 py-0.5 rounded text-xs"
                        style={{ fontFamily: "Raleway", fontWeight: 600 }}
                      >
                        Novo produto
                      </div>
                    )}
                  </div>

                  {/* Informações */}
                  <div className="p-2">
                    <p
                      className="text-[#121212] mb-0.5 line-clamp-2"
                      style={{
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: "13px",
                        lineHeight: "16px",
                      }}
                    >
                      {product.name}
                    </p>
                    <p
                      className="text-[#707372]"
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "11px",
                        lineHeight: "14px",
                      }}
                    >
                      Código SKU: {product.code}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
