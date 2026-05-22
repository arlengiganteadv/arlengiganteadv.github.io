import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Branding */}\n        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">⚖️</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">Advogado Rural</h1>
            <p className="text-xs text-muted-foreground">Defesa Bancária</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Sobre
          </a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Serviços
          </a>
          <a href="#resultados" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Resultados
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2"
            asChild
          >
            <a href="tel:+5573981524621">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Ligar</span>
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
            asChild
          >
            <a href="https://wa.me/message/H6S4OIKKB47UG1" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
