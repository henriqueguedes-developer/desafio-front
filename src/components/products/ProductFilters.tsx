import { ChevronDown } from "lucide-react";

interface ProductFiltersProps {
  familiesOpen: boolean;
  productsOpen: boolean;
  setFamiliesOpen: (open: boolean) => void;
  setProductsOpen: (open: boolean) => void;
}

export const ProductFilters = ({ 
  familiesOpen, 
  productsOpen, 
  setFamiliesOpen, 
  setProductsOpen 
}: ProductFiltersProps) => {
  return (
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
  );
};