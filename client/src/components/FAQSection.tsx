import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a renegociação de dívidas?",
    answer: "Realizamos uma análise completa da sua situação financeira e contrato com a instituição. Após isso, iniciamos negociação estratégica com o banco para reduzir o valor da dívida, alongar os prazos ou ambos. Nosso objetivo é recuperar sua saúde financeira mantendo a propriedade rural.",
  },
  {
    question: "Qual é o custo dos serviços?",
    answer: "Os honorários são negociados conforme a complexidade do caso. Oferecemos diferentes modalidades: por hora, por projeto ou até mesmo honorários condicionados ao resultado. Agendamos uma consulta inicial gratuita para avaliar sua situação.",
  },
  {
    question: "Quanto tempo leva para resolver um caso?",
    answer: "O tempo varia conforme a complexidade. Negociações administrativas podem levar de 2 a 6 meses. Processos judiciais podem levar mais tempo, mas mantemos você informado em cada etapa.",
  },
  {
    question: "Posso perder minha propriedade durante o processo?",
    answer: "Não. Adotamos estratégias legais para proteger sua propriedade desde o início. Atuamos para impedir penhoras e buscas e apreensões, além de trabalhar pela impenhorabilidade de bens essenciais.",
  },
  {
    question: "Atendo apenas produtores rurais?",
    answer: "Minha especialização é em defesa de produtores rurais contra instituições financeiras. Se você atua no agronegócio e enfrenta problemas com crédito rural, sou o especialista que você procura.",
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode entrar em contato via WhatsApp, telefone ou preenchendo o formulário de contato. Oferecemos consulta inicial para avaliar seu caso e apresentar as melhores estratégias.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas às dúvidas mais comuns sobre serviços jurídicos para produtores rurais.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="hover:text-primary transition-colors py-4">
                  <span className="text-left font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Não encontrou sua dúvida?</h3>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco para esclarecer qualquer questão sobre seus direitos e serviços.
          </p>
          <a
            href="https://wa.me/message/H6S4OIKKB47UG1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
