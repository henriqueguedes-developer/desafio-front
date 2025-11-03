// src/components/product-detail/ProductAccordion.tsx
import { memo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export const ProductAccordion = memo(function ProductAccordion({
  items,
}: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0); // Primeiro item aberto por padrão

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#AEB7B9]">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span
              className="text-[#121212]"
              style={{
                fontFamily: "Raleway",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "22px",
              }}
            >
              {item.title}
            </span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-[#707372]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#707372]" />
            )}
          </button>

          {openIndex === index && (
            <div
              className="pb-4 text-[#4C4D4C]"
              style={{
                fontFamily: "Raleway",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
});
