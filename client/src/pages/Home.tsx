import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProofSection from "@/components/ProofSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

/**
 * Landing Page - Advogado Bancário Rural
 * 
 * Design Philosophy: Profissionalismo Elegante com Foco em Confiança
 * - Paleta: Verde escuro (agro/confiança) + Azul marinho (jurídico) + Branco/neutro
 * - Tipografia: Merriweather (títulos - autoridade) + Roboto (corpo - leitura)
 * - Layout: Assimétrico e moderno, guiando visitante até CTA
 * - Elementos: Imagens de campos, produtores, documentos, apertos de mão
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProofSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
