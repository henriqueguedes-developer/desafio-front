// src/hooks/useSearchInput.ts
import { useState, useCallback } from "react";

interface UseSearchInputOptions {
  initialValue?: string;
  onSearch?: (value: string) => void;
}

export const useSearchInput = ({ initialValue = "", onSearch }: UseSearchInputOptions = {}) => {
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = useCallback(() => {
    onSearch?.(value);
  }, [value, onSearch]);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    value,
    setValue,
    isOpen,
    setIsOpen,
    toggleOpen,
    open,
    close,
    handleSearch,
    clear,
  };
};