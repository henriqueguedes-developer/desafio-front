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
      className="flex items-center gap-2 text-xs md:text-sm py-3 md:py-4"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-[#4C4C4C] hover:text-[#80276C] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? "text-[#121212]" : "text-[#4C4C4C]"}
                style={
                  isLast
                    ? {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "20px",
                      }
                    : undefined
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
            )}
          </div>
        );
      })}
    </nav>
  );
});
