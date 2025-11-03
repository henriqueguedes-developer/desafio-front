// src/hooks/useHeaderState.ts
import { useState, useCallback } from "react";

export const useHeaderState = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = useCallback(() => {
    setIsLanguageOpen(prev => !prev);
  }, []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isLanguageOpen,
    isSearchOpen,
    isMobileMenuOpen,
    toggleLanguage,
    openSearch,
    closeSearch,
    toggleMobileMenu,
    closeMobileMenu,
    setIsLanguageOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen
  };
};