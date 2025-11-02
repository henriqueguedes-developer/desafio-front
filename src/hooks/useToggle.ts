// src/hooks/useToggle.ts
import { useState, useCallback } from "react";

/**
 * Hook reutilizável para gerenciar estado de toggle (aberto/fechado)
 * Útil para dropdowns, modals, menus, etc.
 */
export const useToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const set = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return {
    isOpen,
    toggle,
    open,
    close,
    set,
  };
};
