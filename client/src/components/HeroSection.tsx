import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Image - Foto Pessoal */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/IMG_6803.JPG_e8027362.webp"
          alt="Advogado Especializado em Direito Rural"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide">
                Defesa Especializada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Protegendo o Produtor Rural
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Especialista em defesa contra instituições financeiras. Prorrogação de dívidas rurais com <strong className="text-primary">até 3+ anos de carência e 10 anos para pagar</strong>. Proteção de bens e segurança jurídica para sua propriedade.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">3+ anos</p>
                <p className="text-sm text-muted-foreground">Carência em prorrogação</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">10 anos</p>
                <p className="text-sm text-muted-foreground">Prazo para pagar</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                asChild
              >
                <a href="https://wa.me/message/H6S4OIKKB47UG1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Conversar no WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
                asChild
              >
                <a href="#servicos">
                  Conhecer Serviços
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Image (visible on desktop) */}
          <div className="hidden md:block relative">
            <div className="relative z-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/IMG_6803.JPG_e8027362.webp"
                alt="Advogado Especializado em Direito Rural"
                className="rounded-lg shadow-2xl border-4 border-primary/20"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
