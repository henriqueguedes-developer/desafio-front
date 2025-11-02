// src/components/hero/Hero.tsx
import { memo } from "react";
import HeroImage from "@/assets/hero-orthopedic.jpg?url";
import LogoOrthopedic from "@/assets/logo-orthopedic.svg?url";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const Hero = memo(function Hero() {
  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Linha Orthopedic" },
  ];

  return (
    <section
      className="relative w-full py-8 md:pt-[83px] md:pb-16 lg:pb-24"
      style={{ minHeight: "400px" }}
      role="region"
      aria-label="Linha Orthopedic"
    >

      <img
        src={HeroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
        aria-hidden="true"
      />


      <div className="absolute inset-0" />


      <div className="absolute top-0 left-0 z-20 px-4 md:px-8 pt-4 md:pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>


      <div className="container relative z-10 h-full px-4 md:px-8">
        <div className="max-w-5xl pt-16 md:pt-24 lg:pt-32">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-4 md:mb-8">

            <img
              src={LogoOrthopedic}
              alt=""
              className="h-8 md:h-12 lg:h-14 xl:h-16 w-auto"
              aria-hidden="true"
            />
          </div>


          <div className="flex gap-2 max-w-xl ml-0 md:ml-2">
            <span className="text-base md:text-lg lg:text-[24px] leading-relaxed font-medium text-[#121212] shrink-0 pt-1" style={{ fontFamily: "Raleway" }}>•</span>
            <p className="text-base md:text-lg lg:text-[22px] leading-relaxed md:leading-[30px] font-medium text-[#121212]" style={{ fontFamily: "Raleway" }}>
              Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no tratamento e recuperação de pacientes com lesões ortopédicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});