import { memo } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProductGallery } from "@/components/product-detail/ProductGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { ProductHighlight } from "@/components/product-detail/ProductHighlight";
import { ProductDetailsAccordion } from "@/components/product-detail/ProductDetailsAccordion";
import { RelatedProducts } from "@/components/product-detail/RelatedProducts";
import type { ProductDetail } from "@/data/products";
import type { Product } from "@/types";

interface ProductDetailPresentationProps {
  product: ProductDetail;
  relatedProducts: Product[];
  breadcrumbItems: { label: string; href?: string }[];
}

export const ProductDetailPresentation = memo(function ProductDetailPresentation({
  product,
  relatedProducts,
  breadcrumbItems,
}: ProductDetailPresentationProps) {
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

            {/* Seção de Destaque */}
            <div className="mt-12 lg:mt-16">
              <ProductHighlight />
            </div>

            {/* Linha Divisória */}
            <div className="border-t border-[#AEB7B9]"></div>

            {/* Acordeão de Detalhes */}
            <div className="mt-2">
              <ProductDetailsAccordion
                productData={{
                  level: product.level || "",
                  name: product.name,
                  family: product.family || "",
                  code: product.code,
                  model: product.model,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      <RelatedProducts products={relatedProducts} />
    </MainLayout>
  );
});