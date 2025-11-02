// src/components/common/Container.tsx
import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CONTAINER_CLASSES } from "@/lib/constants";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
}

/**
 * Componente Container padronizado
 * Centraliza a classe: "container mx-auto px-4 md:px-16 lg:px-24"
 */
export const Container = memo(function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn(CONTAINER_CLASSES, className)}>
      {children}
    </Component>
  );
});
