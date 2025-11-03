import { memo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "related";
}

export const ProductCard = memo(function ProductCard({
  product,
  variant = "grid"
}: ProductCardProps) {
  const isRelated = variant === "related";

  return isRelated ? (
    <Link
      to={`/produto/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden border border-transparent hover:border-[#AEB7B9] transition-colors block"
    >
      {/* Imagem */}
      <div className="relative aspect-square bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2"
          loading="lazy"
        />
        {product.isNew && (
          <div
            className="absolute top-1 right-1 bg-[#80276C] text-white px-2 py-0.5 rounded text-xs"
            style={{ fontFamily: "Raleway", fontWeight: 600 }}
          >
            Novo produto
          </div>
        )}
      </div>

      {/* Informações */}
      <div className="p-2">
        <p
          className="text-[#121212] mb-0.5 line-clamp-2"
          style={{
            fontFamily: "Raleway",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "16px",
          }}
        >
          {product.name}
        </p>
        <p
          className="text-[#707372]"
          style={{
            fontFamily: "Roboto",
            fontSize: "11px",
            lineHeight: "14px",
          }}
        >
          Código SKU: {product.code}
        </p>
      </div>
    </Link>
  ) : (
    <Link
      to={`/produto/${product.id}`}
      className="cursor-pointer group flex md:flex-col gap-3 md:gap-0"
    >
      <div className="relative shrink-0 w-28 h-28 md:w-full md:h-auto">
        {product.isNew && (
          <Badge className="absolute z-10 bg-[#A75897] text-white top-1 left-1 md:top-2 md:left-2 px-2 py-0.5 md:px-4 md:py-1.5 text-xs md:text-base">
            Lançamento
          </Badge>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full border border-gray-200 object-contain rounded-md"
          style={{
            display: 'block'
          }}
          loading="lazy"
        />
      </div>

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
    </Link>
  );
});