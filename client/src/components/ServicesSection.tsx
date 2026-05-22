import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Prorrogação com Carência",
    description: "Prorrogação de dívidas rurais com até 3+ anos de carência e prazo de até 10 anos para pagar. Respiro financeiro garantido.",
    icon: "⏰",
  },
  {
    title: "Negociação de Dívidas",
    description: "Negociação estratégica com instituições financeiras para redução de dívidas e alongamento de prazos.",
    icon: "📋",
  },
  {
    title: "Defesa contra Juros Abusivos",
    description: "Ação revisional de contratos para eliminar cláusulas abusivas e recuperar valores pagos indevidamente.",
    icon: "⚖️",
  },
  {
    title: "Proteção de Bens",
    description: "Estratégias legais para proteger sua propriedade rural e impenhorabilidade de bens essenciais.",
    icon: "🏠",
  },
  {
    title: "Defesa em Processos Judiciais",
    description: "Representação especializada em ações de busca e apreensão, alienação fiduciária e execução.",
    icon: "📜",
  },
  {
    title: "Orientação em Crédito Rural",
    description: "Consultoria sobre linhas de crédito especializadas, PROAGRO e programas de financiamento.",
    icon: "💰",
  },
  {
    title: "Resolução de Conflitos",
    description: "Mediação e resolução de litígios com instituições financeiras de forma ágil e eficaz.",
    icon: "🤝",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            Soluções Completas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços Especializados em Prorrogação e Defesa
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções jurídicas completas para proteger seus interesses e recuperar sua saúde financeira.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Solução comprovada
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
