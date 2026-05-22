import { Card } from "@/components/ui/card";
import { Award, Users, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/IMG_6803.JPG_e8027362.webp"
              alt="Advogado Especializado em Direito Rural"
              className="rounded-lg shadow-xl border-4 border-primary/20"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide">
                Sobre o Especialista
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Experiência Comprovada em Direito Rural
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de 15 anos de atuação exclusiva em defesa de produtores rurais contra instituições financeiras, 
                ofereço soluções jurídicas personalizadas que protegem seus interesses e recuperam sua saúde financeira.
              </p>
              <p className="text-base text-primary font-semibold bg-primary/10 p-4 rounded-lg">
                🌟 Especialidade: Prorrogação de dívidas rurais com até <strong>3+ anos de carência</strong> e <strong>10 anos para pagar</strong>.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-3">
              <Card className="p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                  <h3 className="font-semibold text-foreground">Especialização Jurídica</h3>
                  <p className="text-sm text-muted-foreground">Direito Bancário Rural, Prorrogação com Carência, Crédito Rural e Defesa do Produtor</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Atendimento Humanizado</h3>
                    <p className="text-sm text-muted-foreground">Escuta atenta e soluções adaptadas à realidade de cada cliente</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Atuação Estratégica</h3>
                    <p className="text-sm text-muted-foreground">Negociação administrativa e defesa judicial comprovadas</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Key Points */}
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <p className="text-foreground">Atendimento presencial e online</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <p className="text-foreground">Acompanhamento integral até resolução</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <p className="text-foreground">Assinatura digital de documentos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
