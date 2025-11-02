// src/pages/ProductDetailPage.tsx
import { memo } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const ProductDetailPage = memo(function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Linha Orthopedic", href: "/" },
    { label: "Órtese Splint Bilateral" },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-6xl mx-auto py-6">
          <h1 className="text-3xl font-bold text-[#4C4C4C] mb-8">
            Detalhes do Produto #{id}
          </h1>
          <p className="text-gray-600">
            Esta é a página de detalhes do produto. O conteúdo será desenvolvido em breve.
          </p>
        </div>
      </div>
    </MainLayout>
  );
});
