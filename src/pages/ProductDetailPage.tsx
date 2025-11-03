// src/pages/ProductDetailPage.tsx
import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProductGallery } from "@/components/product-detail/ProductGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { getProductDetailById } from "@/data/products";

export const ProductDetailPage = memo(function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const productId = id ? parseInt(id, 10) : null;
  const product = productId ? getProductDetailById(productId) : null;

  // Redirecionar para home se produto não encontrado
  if (!product) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Linha Orthopedic", href: "/" },
    { label: product.name },
  ];

  return (
    <MainLayout>
      <div className="bg-white py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Product Detail Grid */}
          <div className="max-w-7xl mx-auto mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Galeria de Imagens */}
              <div>
                <ProductGallery images={product.images} productName={product.name} />
              </div>

              {/* Informações do Produto */}
              <div>
                <ProductInfo
                  family={product.family || ""}
                  name={product.name}
                  codes={product.codes}
                  description={product.fullDescription}
                  level={product.level}
                  colors={product.colors}
                  model={product.model}
                  sizes={product.sizes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
});
