// src/components/product-families/ProductFamilies.tsx
import { memo } from "react";
import { Badge } from "@/components/ui/badge";

const families = [
  { name: "Hidrolight Neo", active: true },
  { name: "Comfort Air", active: false },
  { name: "Ortho Recovery", active: false },
  { name: "Air Flex", active: false },
  { name: "Softline", active: false },
  { name: "Foot Care", active: false },
  { name: "Lean", active: false },
] as const;

export const ProductFamilies = memo(function ProductFamilies() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">

        {/* TÍTULO */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4C4C4C] mb-8 md:mb-10">
          Conheça as{" "}
          <span className="text-[#80276C]">famílias exclusivas</span>
          <br />
          da linha Orthopedic
        </h2>

        {/* BADGES DAS FAMÍLIAS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {families.map((family) => (
            <Badge
              key={family.name}
              variant={family.active ? "default" : "secondary"}
              className={`
                px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all
                ${family.active
                  ? "bg-[#A75897] text-white hover:bg-[#A75897]/90"
                  : "bg-[#F8F8F8] text-[#A75897] hover:bg-[#A75897] hover:text-white"
                }
              `}
            >
              {family.name} ®
            </Badge>
          ))}
        </div>

     
        <div className="max-w-lg mb-12 md:mb-16 lg:mb-10">
          <p
            className="text-[16px] leading-5 text-[#4C4D4C]"
            style={{ fontFamily: "Raleway", fontWeight: 400 }}
          >
            Família voltada para extrair os benefícios do Neoprene.<br/>
            <span className="font-medium text-[#333333]">
              Propriedades térmicas, compressivas e elásticas :
            </span>
            são essas três propriedades que fazem do Neoprene
            uma ferramenta eficaz no tratamento e prevenção de lesões no tratamento ortopédico.
          </p>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="border-b border-[#EBEBEB]"></div>

      </div>
    </section>
  );
});
