// src/components/common/IconButton.tsx
import { memo } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: LucideIcon;
  variant?: "outlined" | "filled";
  color?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}

const sizeClasses = {
  sm: "w-7 h-7",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

const iconSizes = {
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-4 w-4",
};

/**
 * Componente reutilizável para ícones circulares com border ou preenchidos
 * Usado em: Footer (contatos, redes sociais), Header, etc.
 */
export const IconButton = memo(function IconButton({
  icon: Icon,
  variant = "outlined",
  color = "#E57200",
  size = "md",
  href,
  onClick,
  ariaLabel,
  className,
}: IconButtonProps) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center shrink-0 transition-colors",
        sizeClasses[size],
        variant === "outlined" &&
          "border hover:opacity-80",
        variant === "filled" &&
          "hover:opacity-90",
        className
      )}
      style={{
        borderColor: variant === "outlined" ? color : undefined,
        backgroundColor: variant === "filled" ? color : undefined,
      }}
      aria-label={ariaLabel}
    >
      <Icon
        className={iconSizes[size]}
        style={{ color: variant === "outlined" ? color : "white" }}
      />
    </Component>
  );
});
