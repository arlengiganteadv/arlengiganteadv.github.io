import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">⚖️</span>
              </div>
              <h3 className="text-lg font-bold">Advogado Rural</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Especialista em defesa do produtor rural contra instituições financeiras. 
              Renegociação de dívidas, proteção de bens e segurança jurídica.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-accent transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5573981524621"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+55 (73) 98152-4621</span>
              </a>
              <a
                href="mailto:arlengigante.adv@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>arlengigante.adv@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Avenida Siqueira Campos, nº. 1086, Candeias, Vitória da Conquista, BA - Brasil, CEP 45.028-010</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-primary-foreground/80">
              Siga-nos nas redes sociais para dicas e atualizações sobre direito rural.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/message/H6S4OIKKB47UG1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/advogadorural"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/advogadorural"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {currentYear} Advogado Rural. Todos os direitos reservados. | 
            <a href="#" className="hover:text-primary-foreground ml-1">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
