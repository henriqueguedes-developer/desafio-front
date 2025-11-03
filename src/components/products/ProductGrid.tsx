// src/components/products/ProductGrid.tsx
import { memo, useState, useMemo } from "react";
import { Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductPagination } from "@/components/products/ProductPagination";
import { mockProducts } from "@/data/products";

const PRODUCTS_PER_PAGE = 6; // Define o número de produtos por página

export const ProductGrid = memo(function ProductGrid() {
  const [familiesOpen, setFamiliesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize os produtos paginados para evitar cálculos desnecessários
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return mockProducts.slice(startIndex, endIndex);
  }, [currentPage]);

  const totalPages = Math.ceil(mockProducts.length / PRODUCTS_PER_PAGE);

  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

          {/* SIDEBAR DE FILTROS - Oculto no mobile por padrão */}
          <ProductFilters 
            familiesOpen={familiesOpen}
            productsOpen={productsOpen}
            setFamiliesOpen={setFamiliesOpen}
            setProductsOpen={setProductsOpen}
          />

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
                    {mockProducts.length} produtos
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


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>


            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
