// src/components/product-detail/ProductInfo.tsx
import { memo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SetaIcon from "@/assets/icons/seta.svg?url";
import FitaIcon from "@/assets/icons/fita.svg?url";

interface ProductInfoProps {
  family: string;
  name: string;
  codes: string[];
  description: string;
  level?: string;
  colors: { name: string; value: string }[];
  model: string;
  sizes: string[];
}

export const ProductInfo = memo(function ProductInfo({
  family,
  name,
  codes,
  description,
  level,
  colors,
  model,
  sizes,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  return (
    <div className="flex flex-col">
      {/* Badge Família */}
      <div
        className="text-[#4C4D4C] w-fit mb-3"
        style={{
          fontFamily: "Raleway",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
        }}
      >
        {family}
      </div>

      {/* Título */}
      <h1
        className="bg-[#80276C] text-white px-6 py-3 rounded-lg w-fit mb-3"
        style={{
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "40px",
        }}
      >
        {name}
      </h1>

      {/* Códigos */}
      <div
        className="text-[#707372] mb-6"
        style={{
          fontFamily: "Raleway",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "18px",
        }}
      >
        {codes[0]}
      </div>

      {/* Descrição */}
      <div className="max-w-full lg:max-w-sm mb-6">
        <h2
          className="text-lg font-semibold text-[#4C4C4C] mb-2"
          style={{ fontFamily: "Raleway" }}
        >
          Descrição
        </h2>
        <p
          className="text-[#707372] text-sm leading-relaxed"
          style={{ fontFamily: "Roboto" }}
        >
          {description}
        </p>
      </div>

      {/* Nível (se existir) */}
      {level && (
        <div className="pb-6 mb-6 border-b border-[#EBEBEB]">
          <h3
            className="text-base  text-[#121212] mb-2"
            style={{ fontFamily: "Raleway" }}
          >
            Nível 3
          </h3>
          <p
            className="text-[#707372] text-sm"
            style={{ fontFamily: "Roboto" }}
          >
            {level}
          </p>
        </div>
      )}

      {/* Cores */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span
            className="text-sm  text-[#121212]"
            style={{ fontFamily: "Raleway" }}
          >
            Cores disponíveis:
          </span>
          <div className="flex items-center gap-2">
            {colors.map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-2"
              >
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-sm text-[#4C4C4C]">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modelo */}
      <div className="mb-4">
        <span
          className="text-sm  text-[#121212]"
          style={{ fontFamily: "Raleway" }}
        >
          Modelo: 
        </span>
        <span className="text-sm text-[#4C4D4C]"> {model}</span>
      </div>

      {/* Tamanhos */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span
            className="text-sm  text-[#121212]"
            style={{ fontFamily: "Raleway" }}
          >
            Tamanhos disponíveis:
          </span>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <Badge
                key={size}
                variant={selectedSize === size ? "default" : "secondary"}
                className={`px-2 py-0.5 cursor-pointer transition-all text-xs ${
                  selectedSize === size
                    ? "bg-[#E57200] text-white hover:bg-[#CC6600]"
                    : "bg-[#EBEBEB] text-[#4C4C4C] hover:bg-[#E57200] hover:text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Links Úteis */}
      <div className="flex items-center gap-4 mb-6">
        <a
          href="#"
          className="flex items-center gap-2 text-[#E57200] hover:text-[#CC6600] font-medium text-sm transition-colors"
        >
          <img src={SetaIcon} alt="" className="h-5 w-5" />
          Descubra o seu tamanho ideal
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#707372] hover:text-[#4C4C4C] font-medium text-sm transition-colors"
        >
          <img src={FitaIcon} alt="" className="h-5 w-5" />
          Tabela de medidas
        </a>
      </div>

      {/* Botão CTA */}
      <div className="w-fit mb-3">
        <Button className="px-4 py-1.5 bg-[#E57200] hover:bg-[#CC6600] text-white text-sm font-semibold rounded-md">
          Encontrar lojas online
        </Button>
      </div>

      {/* Link Vendedor */}
      <p className="text-sm text-[#707372]">
        Gostou desse produto?{" "}
        <a
          href="#"
          className="text-[#4C4C4C] underline hover:text-[#E57200] transition-colors"
        >
          Seja um vendedor
        </a>
      </p>
    </div>
  );
});
