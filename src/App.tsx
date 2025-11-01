// src/App.tsx
import { Header } from "@/components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
     
      {/* resto da página aqui */}
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold border-amber-50">Header funcionando!</h1>
        <p>Teste o menu mobile, busca e dropdown.</p>

        
      </main>
    </div>
  );
}