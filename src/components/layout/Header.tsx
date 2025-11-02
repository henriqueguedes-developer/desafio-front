// src/components/layout/Header.tsx
import { memo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search, Menu, ChevronDown } from "lucide-react";
import LogoUrl from "@/assets/logo.svg?url";
import FlagBRUrl from "@/assets/icons/flag-br.svg?url";

const navItems = [
  { label: "Produtos", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Catálogos", href: "#" },
] as const;

export const Header = memo(function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center" aria-label="Página inicial">
            <img src={LogoUrl} alt="Logo Orthopedic" className="h-8 w-auto" />
          </a>

          {/* NAVEGAÇÃO COM BUSCA */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4C4C4C] hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* BUSCA (LUPA OU CAMPO) */}
            <div className="relative flex items-center">
              <button
                className={`h-8 w-8 flex items-center justify-center rounded-full bg-[#F8F8F8] hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer ${isSearchOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                aria-label="Buscar produtos"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4 text-gray-700 transition-colors duration-200" />
              </button>

              {isSearchOpen && (
                <div className="absolute left-0 top-0 z-10 animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative h-8 w-48 flex items-center rounded-md border border-[#e4e4e4] border-[1px] bg-white shadow-[0_0_0_0px] transition-all duration-300 focus-within:border-primary">
                    <Search className="absolute left-3 h-3.5 w-3.5 text-gray-400 pointer-events-none transition-colors duration-200" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="h-full w-full pl-9 pr-8 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 transition-all duration-300"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                    <button
                      className="absolute right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer text-sm"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setIsSearchOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* BOTÃO E IDIOMA */}
          <div className="hidden md:flex items-center gap-3">

            {/* BOTÃO FALE CONOSCO */}
            <Button
              className="h-10 px-6 rounded-lg bg-[#E57200] hover:bg-[#CC6600] text-white font-medium"
            >
              Fale conosco
            </Button>

            {/* SELETOR DE IDIOMA */}
            <div className="relative">
              <button
                className="h-10 px-3 flex items-center gap-2 rounded-md focus:outline-none focus:ring-0 hover:bg-gray-50 transition-colors"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
                aria-label="Selecionar idioma"
              >
                <img src={FlagBRUrl} alt="Brasil" className="h-5 w-7" />
                <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* DROPDOWN DE IDIOMAS */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-[#e4e4e4] bg-white shadow-[0_0_0_0px] z-50">
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                    <img src={FlagBRUrl} alt="Brasil" className="h-5 w-7" />
                    Português (BR)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MENU MOBILE */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-lg font-medium hover:text-primary">
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="relative h-10 flex items-center rounded-md border border-[#e4e4e4] border-[1px] bg-white shadow-[0_0_0_0px] transition-all duration-300 focus-within:border-primary">
                    <Search className="absolute left-3 h-4 w-4 text-gray-500 pointer-events-none transition-colors duration-200" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="w-full h-full pl-10 pr-3 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 rounded-md transition-all duration-300"
                      aria-label="Buscar no menu mobile"
                    />
                  </div>
                  <Button className="w-full bg-[#E57200] hover:bg-[#CC6600] justify-center text-white">
                    Fale conosco
                    <img src={FlagBRUrl} alt="Brasil" className="ml-2 h-3 w-4" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
});