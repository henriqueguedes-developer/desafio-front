export interface Product {
  id: number;
  name: string;
  code: string;
  image: string;
  isNew: boolean;
  description?: string;
  price?: number;
  category?: string;
  family?: string;
  sizes?: string[];
  colors?: string[];
  features?: string[];
}

export interface ProductFamily {
  name: string;
  active: boolean;
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
