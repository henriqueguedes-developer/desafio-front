// src/hooks/useResponsive.ts
import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    // Only add event listener if running in browser
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return {
    isMobile: screenSize.width < 768,
    isTablet: screenSize.width >= 768 && screenSize.width < 1024,
    isDesktop: screenSize.width >= 1024,
    screenWidth: screenSize.width,
  };
};