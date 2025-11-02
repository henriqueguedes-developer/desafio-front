export interface Product {
  id: number;
  name: string;
  code: string;
  image: string;
  isNew: boolean;
  description?: string;
  price?: number;
  category?: string;
}