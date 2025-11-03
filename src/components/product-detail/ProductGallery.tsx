// src/components/product-detail/ProductGallery.tsx
import { memo, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCarousel } from "@/hooks/useCarousel";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery = memo(function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const { 
    currentIndex, 
    canGoPrevious, 
    canGoNext, 
    handlePrevious, 
    handleNext, 
    setCurrentIndex 
  } = useCarousel({ 
    itemsCount: images.length,
    initialIndex: 0,
    itemsPerSlide: 5 // For thumbnails
  });

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, [setCurrentIndex]);

  // Memoize thumbnail buttons to prevent re-rendering
  const thumbnailButtons = useMemo(() => images.map((image, index) => (
    <button
      key={index}
      onClick={() => handleThumbnailClick(index)}
      className={cn(
        "shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 rounded-lg overflow-hidden transition-all",
        currentIndex === index
          ? "border-[#E57200] ring-2 ring-[#E57200]/30"
          : "border-gray-200 hover:border-gray-300"
      )}
    >
      <img
        src={image}
        alt={`${productName} - Miniatura ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </button>
  )), [images, currentIndex, handleThumbnailClick, productName]);

  return (
    <div className="flex flex-col gap-4">
      {/* Imagem Principal */}
      <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden aspect-square">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />

        {/* Contador */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base font-medium px-3 py-1 rounded"
          style={{
            backgroundColor: '#12121233',
            backdropFilter: 'blur(2.4px)',
            WebkitBackdropFilter: 'blur(2.4px)'
          }}
        >
          {currentIndex + 1}/{images.length}
        </div>

        {/* Ícone de Zoom */}
        <button
          className="absolute bottom-4 right-4 p-2 rounded-full transition-colors hover:opacity-90"
          style={{
            backgroundColor: '#12121266',
            backdropFilter: 'blur(2.4px)',
            WebkitBackdropFilter: 'blur(2.4px)'
          }}
          aria-label="Ampliar imagem"
        >
          <ZoomIn className="h-5 w-5 text-white" />
        </button>

        {/* Setas de Navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
              aria-label="Imagem anterior"
              disabled={!canGoPrevious}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
              aria-label="Próxima imagem"
              disabled={!canGoNext}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          className="shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Imagem anterior"
          disabled={images.length <= 1 || !canGoPrevious}
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
          {thumbnailButtons}
        </div>

        <button
          onClick={handleNext}
          className="shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Próxima imagem"
          disabled={images.length <= 1 || !canGoNext}
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Baixar Folder */}
      <a
        href="#"
        className="flex items-center gap-2 text-[#E57200] hover:text-[#CC6600] font-medium text-sm transition-colors"
      >
        <Download className="h-4 w-4" />
        Baixar Folder do Produto
      </a>
    </div>
  );
});
