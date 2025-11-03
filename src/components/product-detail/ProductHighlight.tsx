// src/components/product-detail/ProductHighlight.tsx
import { memo } from "react";
import { Play } from "lucide-react";
import destacaImg from "@/assets/products/player.png";
import anvisaImg from "@/assets/products/anvisa.png";

export const ProductHighlight = memo(function ProductHighlight() {
  return (
    <div className="flex flex-col gap-4">
      {/* Vídeo/Imagem destaque */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video mb-4">
        <img
          src={destacaImg}
          alt="Vídeo demonstrativo do produto"
          className="w-full h-full object-cover"
        />


        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Reproduzir vídeo"
        >
          <Play className="h-8 w-8 text-[#E57200] fill-[#E57200]" />
        </button>
      </div>

      <div className="max-w-2xl">
        <h2
          className="text-[#4C4C4C] mb-4 text-xl md:text-3xl"
          style={{
            fontFamily: "Raleway",
            fontWeight: 500,
            lineHeight: "1.2",
          }}
        >
          <div>
            Fabricação{" "}
            <span
              className="text-[#E57200]"
              style={{ fontWeight: 700 }}
            >
              própria
            </span>{" "}
            e nacional.
          </div>
          <div>
            <span
              className="text-[#E57200]"
              style={{ fontWeight: 700 }}
            >
              Qualidade
            </span>{" "}
            garantida!
          </div>
        </h2>

        <div
          className="text-[#707372] text-xs md:text-base"
          style={{
            fontFamily: "Roboto",
            lineHeight: "1.5",
          }}
        >
          <div>Antes de utilizar o produto, leia atentamente as</div>
          <div>precauções e Instruções de uso.</div>
        </div>
      </div>

      {/* Logo Anvisa - fora do max-w-2xl para centralizar na página */}
      <div className="flex justify-center items-center mt-6 w-full">
        <img
          src={anvisaImg}
          alt="Anvisa"
          className="w-full max-w-sm md:max-w-3xl h-auto"
        />
      </div>
    </div>
  );
});
