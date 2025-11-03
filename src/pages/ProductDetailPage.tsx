// src/pages/ProductDetailPage.tsx
import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ProductDetailPresentation } from "@/components/product-detail/ProductDetailPresentation";
import { getProductDetailById, getRelatedProducts } from "@/data/products";

export const ProductDetailPage = memo(function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const productId = id ? parseInt(id, 10) : null;
  const product = productId ? getProductDetailById(productId) : null;

  // Redirecionar para home se produto não encontrado
  if (!product) {
    return <Navigate to="/" replace />;
  }

  const relatedProducts = productId ? getRelatedProducts(productId, 12) : [];

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Linha Orthopedic", href: "/" },
    { label: product.name },
  ];

  return (
    <ProductDetailPresentation
      product={product}
      relatedProducts={relatedProducts}
      breadcrumbItems={breadcrumbItems}
    />
  );
});
