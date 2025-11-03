// src/components/common/Breadcrumb.tsx
import { memo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = memo(function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="flex items-center gap-1.5 md:gap-2 py-2 md:py-4 overflow-x-auto"
      style={{ flexWrap: "nowrap", fontSize: "11px" }}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-1.5 md:gap-2 shrink-0">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-[#4C4C4C] hover:text-[#80276C] transition-colors whitespace-nowrap md:text-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`${isLast ? "text-[#121212] text-xs md:text-base" : "text-[#4C4C4C]"} whitespace-nowrap`}
                style={
                  isLast
                    ? {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                      }
                    : undefined
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight className="h-2.5 w-2.5 md:h-4 md:w-4 text-gray-400 shrink-0" />
            )}
          </div>
        );
      })}
    </nav>
  );
});
