// src/components/products/ProductGrid.tsx
import { memo, useState } from "react";
import { ChevronDown, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Importar as imagens
import product1 from "@/assets/products/imagem1.png";
import product2 from "@/assets/products/imagem2.png";

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
    image: product1,
    isNew: false,
  },
  {
    id: 4,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product2,
    isNew: true,
  },
  {
    id: 5,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product1,
    isNew: true,
  },
  {
    id: 6,
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: product2,
    isNew: true,
  },
];

export const ProductGrid = memo(function ProductGrid() {
  const [familiesOpen, setFamiliesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

          {/* SIDEBAR DE FILTROS - Oculto no mobile por padrão */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Filtros */}
              <div className="p-3 bg-[#FFFFFF] border-b border-[#D5D7D8]">
                <h3 className="text-sm font-medium text-[#121212]">Filtros</h3>
              </div>

              {/* Lançamentos */}
              <div className="p-3 bg-[#F8F8F8] border-b border-[#D5D7D8]">
                <h3 className="text-sm font-medium text-[#121212]">Lançamentos</h3>
              </div>

              {/* Famílias/Tecnologias */}
              <button
                onClick={() => setFamiliesOpen(!familiesOpen)}
                className="w-full p-3 bg-[#F8F8F8] border-b border-[#D5D7D8] flex items-center justify-between text-sm font-medium text-[#121212] hover:bg-gray-200"
              >
                Famílias/Tecnologias
                <ChevronDown className={`h-4 w-4 transition-transform ${familiesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Produtos */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full p-3 bg-[#F8F8F8] flex items-center justify-between text-sm font-medium text-[#121212] hover:bg-gray-200"
              >
                Produtos
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </aside>

          {/* GRID DE PRODUTOS */}
          <div className="flex-1">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 mb-3 md:mb-1" style={{ paddingRight: '4px' }}>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-[#F8F8F8] rounded-full">
                  <p
                    className="text-xs md:text-[14px] leading-4 font-bold text-[#121212]"
                    style={{ fontFamily: "Raleway" }}
                  >
                    86 produtos
                  </p>
                </div>
                <div className="relative flex items-center">
                  <button
                    className={`p-1.5 bg-[#F8F8F8] hover:bg-gray-300 rounded-full transition-all duration-300 ${isSearchOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Buscar produtos"
                  >
                    <Search className="h-4 w-4 text-gray-600" />
                  </button>

                  {isSearchOpen && (
                    <div className="absolute left-0 top-0 z-10 animate-in fade-in zoom-in-95 duration-200">
                      <div className="relative h-7 w-44 flex items-center rounded-md border border-[#e4e4e4] bg-white  transition-all duration-300 focus-within:border-primary">
                        <Search className="absolute left-3 h-3.5 w-3.5 text-gray-400 pointer-events-none transition-colors duration-200" />
                        <input
                          type="text"
                          placeholder="Buscar..."
                          className="h-full w-full pl-9 pr-8 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 transition-all duration-300"
                          autoFocus
                          onBlur={() => setIsSearchOpen(false)}
                        />
                        <button
                          className="absolute right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer text-sm"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setIsSearchOpen(false)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Button className="bg-[#E57200] hover:bg-[#CC6600] text-white h-9">
                <Download className="h-4 w-4 " />
                Baixar Catálogo
              </Button>
            </div>

            {/* Grid - Responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group flex md:flex-col gap-3 md:gap-0"
                  style={{ margin: 0, padding: 0 }}
                >
                  {/* Box da imagem */}
                  <div className="relative shrink-0 w-28 h-28 md:w-full md:h-auto" style={{ margin: 0, padding: 0 }}>
                    {product.isNew && (
                      <Badge className="absolute top-1 left-1 md:top-2 md:left-2 bg-[#A75897] text-white px-2 py-0.5 md:px-4 md:py-1.5 text-xs md:text-base z-10">
                        Lançamento
                      </Badge>
                    )}

                    {/* Imagem */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full border border-gray-200 object-contain rounded-md"
                      style={{
                        margin: 0,
                        padding: 0,
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Texto abaixo/ao lado da imagem */}
                  <div
                    className="flex-1 md:mb-0"
                    style={{
                      marginTop: '0',
                      marginBottom: 0,
                      padding: '2px 2px',
                      background: 'white'
                    }}
                  >
                    <h3
                      className="text-sm md:text-[16px] font-medium text-[#121212] mb-0.5 wrap-break-word"
                      style={{
                        fontFamily: 'Raleway',
                        fontWeight: 500,
                        lineHeight: '20px',
                        margin: 0,
                        padding: 0
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-xs md:text-[14px] text-gray-500 wrap-break-word"
                      style={{
                        lineHeight: '16px',
                        margin: 0,
                        padding: 0
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Raleway',
                          fontWeight: 700,
                          color: '#4C4D4C'
                        }}
                      >
                        Cód. Produto:{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Roboto',
                          fontWeight: 400
                        }}
                      >
                        {product.code}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mt-6 md:mt-8 mb-4"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '18px'
              }}
            >
              <button
                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base"
                aria-label="Página anterior"
              >
                &lt;
              </button>

              <button
                className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full border border-[#707372] text-[#121212] cursor-pointer text-sm md:text-base"
                style={{ boxShadow: '0px 0px 4px 0px #707372' }}
              >
                1
              </button>
              <button className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base">
                2
              </button>
              <button className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base">
                3
              </button>
              <button className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base">
                4
              </button>
              <button className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base">
                5
              </button>

              <span className="text-[#707372] text-sm md:text-base">...</span>

              <button className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base">
                10
              </button>

              <button
                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base"
                aria-label="Próxima página"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
