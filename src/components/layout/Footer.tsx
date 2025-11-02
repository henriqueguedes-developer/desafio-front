// src/components/layout/Footer.tsx
import { memo, useState } from "react";
import { Phone, Mail, Instagram, Youtube, Facebook, ChevronDown } from "lucide-react";
import LogoUrl from "@/assets/logo.svg?url";
import FlagBRUrl from "@/assets/icons/flag-br.svg?url";

export const Footer = memo(function Footer() {
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  return (
    <footer className="w-full bg-[#4C4D4C]">
      {/* Conteúdo principal do footer */}
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12 border-b border-[#707372]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <img src={LogoUrl} alt="Logo Orthopedic" className="h-10 w-auto brightness-0 invert" />
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-white font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Trabalhe conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Download de Catálogos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Download de Catálogos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Catálogo geral
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Linha Orthopedic
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Linha Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Linha Special Cares
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Catálogo Foot Care
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Catálogo Acessibilidade
                </a>
              </li>
            </ul>
          </div>

          {/* Linhas de produtos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Linhas de produtos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Orthopedic
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBEBEB] hover:text-white transition-colors text-sm">
                  Special Cares
                </a>
              </li>
            </ul>
          </div>

          {/* Entre em contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entre em contato e tire suas dúvidas</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border border-[#E57200] flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-[#E57200]" />
                </div>
                <span className="text-[#EBEBEB] text-sm">+55 48 3333 3333</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full border border-[#E57200] flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-[#E57200]" />
                </div>
                <span className="text-[#EBEBEB] text-sm">
                  sac@loremipsum.com.br ou rp@loremipsum.com.br
                </span>
              </div>
            </div>

            <div>
              <p className="text-white font-semibold mb-3 text-sm">
                Nos acompanhe também<br />nas redes sociais
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-[#E57200] flex items-center justify-center hover:border-[#CC6600] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-[#E57200]" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-[#E57200] flex items-center justify-center hover:border-[#CC6600] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4 text-[#E57200]" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-[#E57200] flex items-center justify-center hover:border-[#CC6600] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-[#E57200]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#4C4D4C] py-4">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Seletor de país */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-[#EBEBEB] hover:text-white transition-colors text-sm"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
              >
                Selecionar País
                <img src={FlagBRUrl} alt="Brasil" className="h-5 w-7" />
                <ChevronDown className={`h-4 w-4 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Copyright */}
            <div className="text-[#EBEBEB] text-xs text-center md:text-right">
              © 2023 Lorem Ipsum. Todos os direitos reservados.
              <br />
              Av dos Bud, 150 - Florianópolis - SC - Brasil
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
