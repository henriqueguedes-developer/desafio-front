// src/components/common/SearchInput.tsx
import { memo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  variant?: "default" | "compact" | "mobile";
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
}

export const SearchInput = memo(function SearchInput({
  variant = "default",
  placeholder = "Buscar...",
  className,
  onSearch,
}: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(variant === "mobile");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  // Variant: compact (apenas ícone que expande)
  if (variant === "compact") {
    return (
      <div className={cn("relative flex items-center", className)}>
        <button
          className={cn(
            "h-8 w-8 flex items-center justify-center rounded-full bg-[#F8F8F8] hover:bg-gray-200",
            "transition-all duration-300 transform hover:scale-105 cursor-pointer",
            isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
          )}
          aria-label="Buscar produtos"
          onClick={() => setIsOpen(true)}
        >
          <Search className="h-4 w-4 text-gray-700 transition-colors duration-200" />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-0 z-10 animate-in fade-in zoom-in-95 duration-200">
            <form onSubmit={handleSubmit} className="relative h-8 w-48 flex items-center rounded-md border border-[#e4e4e4] bg-white transition-all duration-300 focus-within:border-primary">
              <Search className="absolute left-3 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-full w-full pl-9 pr-8 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0"
                autoFocus
                onBlur={() => setIsOpen(false)}
              />
              <button
                type="button"
                className="absolute right-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  // Variant: mobile ou default (sempre visível)
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex items-center rounded-md border border-[#e4e4e4] bg-white",
        variant === "mobile" ? "h-10" : "h-7 w-44",
        className
      )}
    >
      <Search className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full pl-10 pr-3 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 rounded-md"
        aria-label={placeholder}
      />
    </form>
  );
});
