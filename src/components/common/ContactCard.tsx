// src/components/common/ContactCard.tsx
import { memo } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  variant?: "mobile" | "desktop";
  href?: string;
  className?: string;
}

/**
 * Componente reutilizável para cards de contato
 * Usado no Footer para telefone e emails
 */
export const ContactCard = memo(function ContactCard({
  icon: Icon,
  label,
  value,
  variant = "desktop",
  href,
  className,
}: ContactCardProps) {
  const Component = href ? "a" : "div";

  if (variant === "mobile") {
    return (
      <Component
        href={href}
        className={cn(
          "bg-[#5A5A5A] rounded-lg p-4 flex items-center gap-3",
          href && "cursor-pointer hover:bg-[#6A6A6A] transition-colors",
          className
        )}
      >
        <div className="w-8 h-8 rounded-full border border-[#E57200] flex items-center justify-center shrink-0">
          <Icon className="h-4 w-4 text-[#E57200]" />
        </div>
        <div className="flex-1">
          <p className="text-[#EBEBEB] text-xs mb-1">{label}</p>
          <p className="text-white text-sm font-medium">{value}</p>
        </div>
        {href && <span className="text-[#EBEBEB]">›</span>}
      </Component>
    );
  }

  // Desktop variant
  return (
    <Component
      href={href}
      className={cn(
        "flex items-center gap-2",
        href && "cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
    >
      <div className="w-7 h-7 rounded-full border border-[#E57200] flex items-center justify-center shrink-0">
        <Icon className="h-3.5 w-3.5 text-[#E57200]" />
      </div>
      <span className="text-[#EBEBEB] text-sm">{value}</span>
    </Component>
  );
});
