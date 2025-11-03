// src/utils/breadcrumbs.ts
import type { BreadcrumbItem } from "@/types";

export const createBreadcrumbItems = (currentPageLabel: string, additionalItems: BreadcrumbItem[] = []): BreadcrumbItem[] => {
  return [
    { label: "Início", href: "/" },
    ...additionalItems,
    { label: currentPageLabel },
  ];
};