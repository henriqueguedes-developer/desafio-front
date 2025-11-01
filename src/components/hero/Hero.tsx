// src/components/hero/Hero.tsx
import { memo } from "react";
import HeroImage from "@/assets/hero-orthopedic.jpg?url";
import LogoOrthopedic from "@/assets/logo-orthopedic.svg?url";

export const Hero = memo(function Hero() {
  return (
    <section
      className="relative w-full pt-[83px] pb-16 md:pb-24"
      style={{ aspectRatio: "1366 / 617" }}
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

  
      <div className="absolute top-0 left-0 z-20 px-4 md:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm font-medium text-accent">
          <a href="/" className="hover:underline transition-all">
            Início
          </a>
          <span aria-hidden="true" className="text-gray-500">/</span>
          <span className="font-semibold">Linha Orthopedic</span>
        </nav>
      </div>


      <div className="container relative z-10 h-full px-4 md:px-8">
        <div className="max-w-5xl pt-32">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
            
            <img
              src={LogoOrthopedic}
              alt=""
              className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
              aria-hidden="true"
            />
          </div>

         
          <div className="flex gap-2 max-w-xl ml-2">
            <span className="text-[24px] leading-[30px] font-medium text-[#121212] shrink-0" style={{ fontFamily: "Raleway" }}>•</span>
            <p className="text-[22px] leading-[30px] font-medium text-[#121212]" style={{ fontFamily: "Raleway" }}>
              Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no tratamento e recuperação de pacientes com lesões ortopédicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});