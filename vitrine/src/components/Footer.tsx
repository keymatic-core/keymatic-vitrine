import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

const FOOTER_LINKS = {
  solucoes: [
    { label: "E-commerce de Elite", href: "#solucoes" },
    { label: "Automação Inteligente", href: "#solucoes" },
    { label: "Consultoria em IA", href: "#solucoes" },
    { label: "Cases de Sucesso", href: "#cases" },
  ],
  empresa: [
    { label: "Sobre a Keymatic", href: "#" },
    { label: "Nossa História (VTS)", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "#" },
    { label: "Conformidade LGPD", href: "/politica-de-privacidade#7" },
    { label: "Política de Cookies", href: "/politica-de-privacidade#6" },
  ],
};


export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Solutions */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-zinc-300">Soluções</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.solucoes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-zinc-300">Empresa</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-zinc-300">Legal</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-zinc-300">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl("Olá! Vim pelo site da Keymatic.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@keymatic.com.br"
                  className="flex items-center gap-2 text-[13px] text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  <Mail size={13} />
                  contato@keymatic.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-[13px] text-zinc-600">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                <span>São Mateus, São Paulo — SP</span>
              </li>
            </ul>

            {/* Socials — adicionar quando criar as contas */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md gradient-brand flex items-center justify-center font-mono font-bold text-[10px] text-white">
              K
            </div>
            <span className="text-[12px] text-zinc-600">
              &copy; {new Date().getFullYear()} Keymatic &mdash; Uma marca VTS Inform&aacute;tica &middot; 20 anos de hist&oacute;ria
            </span>
          </div>
          <a href="#" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
            Mapa do Site
          </a>
        </div>
      </div>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keymatic",
            legalName: "VTS Comércio e Serviços LTDA",
            description:
              "E-commerce de elite, automação inteligente e consultoria em IA.",
            url: "https://keymatic.com.br",
            foundingDate: "2006",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Dr. Aureliano da Silva Arruda, 625",
              addressLocality: "São Mateus",
              addressRegion: "SP",
              postalCode: "03960-050",
              addressCountry: "BR",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "VTS Informática",
              foundingDate: "2006",
            },
          }),
        }}
      />
    </footer>
  );
}
