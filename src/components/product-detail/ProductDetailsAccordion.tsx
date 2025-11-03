// src/components/product-detail/ProductDetailsAccordion.tsx
import { memo } from "react";
import { ProductAccordion } from "./ProductAccordion";

interface ProductDetailsAccordionProps {
  productData: {
    level?: string;
    name: string;
    family: string;
    code: string;
    model: string;
  };
}

export const ProductDetailsAccordion = memo(function ProductDetailsAccordion({
  productData,
}: ProductDetailsAccordionProps) {
  const accordionItems = [
    {
      title: "Detalhes",
      content: (
        <div className="space-y-2">
          {productData.level && (
            <p>
              <span style={{ fontWeight: 500 }}>Nível 3:</span> {productData.level}
            </p>
          )}
          <p>
            <span style={{ fontWeight: 500 }}>Nome Comercial:</span> {productData.name}
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Linha:</span> Orthopedic
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Cod. Produto (referências/SKU):</span> {productData.code}
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Família de Produtos:</span> {productData.family}
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Modelos do produto/esquerda/direita-bilateral:</span>{" "}
            {productData.model}
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Composição:</span> 74% borracha de cloropreno, 16%
            poliamida, 9%poliéstireno e 1%PVC.
          </p>
          <p style={{ fontWeight: 500 }} className="mt-2">PRODUTO TÉRMICO</p>
        </div>
      ),
    },
    {
      title: "Especificações técnicas",
      content: (
        <div className="space-y-2">
          <p>
            <span style={{ fontWeight: 500 }}>Material:</span> Neoprene Plush de alta qualidade
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Características:</span> Propriedades isolantes térmicas,
            acabamento em plush
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Talas:</span> Duas talas removíveis e ajustáveis
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Sistema de fechamento:</span> Elástico aderente com ampla
            capacidade de ajuste
          </p>
        </div>
      ),
    },
    {
      title: "Indicações e Instrução de uso",
      content: (
        <div className="space-y-2">
          <p>
            <span style={{ fontWeight: 500 }}>Indicações:</span> Tratamento de lesões de punho,
            imobilização, recuperação pós-operatória, prevenção de lesões por
            esforço repetitivo.
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Modo de uso:</span> Ajuste a órtese ao punho, posicionando
            as talas conforme orientação médica. Utilize o sistema de fechamento
            elástico para garantir a compressão adequada.
          </p>
          <p className="text-[#E57200]" style={{ fontWeight: 500 }}>
            Importante: Consulte um médico antes de usar.
          </p>
        </div>
      ),
    },
    {
      title: "Garantia",
      content: (
        <div className="space-y-2">
          <p>
            <span style={{ fontWeight: 500 }}>Garantia do fabricante:</span> 90 dias contra defeitos de
            fabricação.
          </p>
          <p>
            <span style={{ fontWeight: 500 }}>Condições:</span> A garantia cobre apenas defeitos de
            fabricação, não incluindo desgaste natural, uso inadequado ou danos
            causados por terceiros.
          </p>
          <p>
            Para acionar a garantia, entre em contato com o SAC apresentando nota
            fiscal e descrição do problema.
          </p>
        </div>
      ),
    },
  ];

  return <ProductAccordion items={accordionItems} />;
});
