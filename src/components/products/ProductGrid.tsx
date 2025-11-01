// src/components/products/ProductGrid.tsx
import { memo, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Importar as imagens
import product1 from "@/assets/products/imagem1.png";
import product2 from "@/assets/products/imagem2.png";
import product3 from "@/assets/products/imagem3.png";
import product4 from "@/assets/products/imagem4.png";

const products = [
  {
    id: 1,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product1,
    isNew: false,
  },
  {
    id: 2,
    name: "Órtese Soft Curta sem Polegar",
    code: "OR1066",
    image: product2,
    isNew: true,
  },
  {
    id: 3,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product3,
    isNew: false,
  },
  {
    id: 4,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product4,
    isNew: true,
  },
];

export const ProductGrid = memo(function ProductGrid() {
  const [familiesOpen, setFamiliesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* SIDEBAR DE FILTROS */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Filtros */}
              <div className="p-4 bg-[#FFFFFF] border-b border-[#D5D7D8]">
                <h3 className="text-sm font-medium text-[#121212]">Filtros</h3>
              </div>

              {/* Lançamentos */}
              <div className="p-4 bg-[#F8F8F8] border-b border-[#D5D7D8]">
                <h3 className="text-sm font-medium text-[#121212]">Lançamentos</h3>
              </div>

              {/* Famílias/Tecnologias */}
              <button
                onClick={() => setFamiliesOpen(!familiesOpen)}
                className="w-full p-4 bg-[#F8F8F8] border-b border-[#D5D7D8] flex items-center justify-between text-sm font-medium text-[#121212] hover:bg-gray-200"
              >
                Famílias/Tecnologias
                <ChevronDown className={`h-4 w-4 transition-transform ${familiesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Produtos */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full p-4 bg-[#F8F8F8] flex items-center justify-between text-sm font-medium text-[#121212] hover:bg-gray-200"
              >
                Produtos
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </aside>

          {/* GRID DE PRODUTOS */}
          <div className="flex-1">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-lg font-medium text-gray-700">{products.length} produtos</p>
              <Button className="bg-[#E57200] hover:bg-[#CC6600] text-white">
                <Download className="h-4 w-4 mr-2" />
                Baixar Catálogo
              </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  {/* Badge de Lançamento */}
                  <div className="relative mb-4">
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 bg-[#A75897] text-white px-3 py-1 text-xs">
                        Lançamento
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain"
                    />
                  </div>

                  {/* Info do Produto */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Cód. Produto: {product.code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
