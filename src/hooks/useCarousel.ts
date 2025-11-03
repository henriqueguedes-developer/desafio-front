import { useState, useEffect, useCallback } from "react";

interface UseCarouselOptions {
  itemsCount: number;
  initialIndex?: number;
  itemsPerSlide?: number;
}

export const useCarousel = ({ 
  itemsCount, 
  initialIndex = 0, 
  itemsPerSlide: defaultItemsPerSlide = 6 
}: UseCarouselOptions) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [itemsPerSlide, setItemsPerSlide] = useState(defaultItemsPerSlide);

  const effectiveItemsPerSlide = Math.min(itemsPerSlide, itemsCount);
  
  const maxIndex = Math.max(0, itemsCount - effectiveItemsPerSlide);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = itemsCount > effectiveItemsPerSlide && currentIndex < maxIndex;

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const calculateItemsPerSlide = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth >= 1024 
          ? defaultItemsPerSlide 
          : window.innerWidth >= 768 
            ? Math.floor(defaultItemsPerSlide / 2) 
            : Math.max(1, Math.floor(defaultItemsPerSlide / 3));
      }
      return defaultItemsPerSlide;
    };

    const handleResize = () => {
      setItemsPerSlide(calculateItemsPerSlide());
      setCurrentIndex(prev => Math.min(prev, Math.max(0, itemsCount - calculateItemsPerSlide())));
    };

    setItemsPerSlide(calculateItemsPerSlide());
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsCount, defaultItemsPerSlide]);

  return {
    currentIndex,
    canGoPrevious,
    canGoNext,
    handlePrevious,
    handleNext,
    itemsPerSlide: effectiveItemsPerSlide,
    maxIndex,
    setCurrentIndex
  };
};