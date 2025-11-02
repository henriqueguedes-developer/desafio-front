// src/components/common/Dropdown.tsx
import { memo, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownProps {
  trigger: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  align?: "left" | "right";
  className?: string;
}

/**
 * Componente reutilizável para dropdowns
 * Usado em: Header (idioma), Footer (país), ProductFilters
 */
export const Dropdown = memo(function Dropdown({
  trigger,
  isOpen,
  onToggle,
  children,
  align = "right",
  className,
}: DropdownProps) {
  return (
    <div className={cn("relative", className)}>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 focus:outline-none focus:ring-0 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full mt-2 w-48 rounded-lg border border-[#e4e4e4] bg-white shadow-sm z-50",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
});
