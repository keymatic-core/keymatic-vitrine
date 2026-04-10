import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { KeymaticIcon } from "./icons/KeymaticLogo";
import { getWhatsAppUrl } from "../lib/utils";

const FOOTER_LINKS = {
  solucoes: [
    { label: "E-commerce de Elite", href: "/ecommerce" },
    { label: "Automação Inteligente", href: "/automacao" },
    { label: "Consultoria em IA", href: "/consultoria-ia" },
    { label: "Cases de Sucesso", href: "#cases" },
  ],
  empresa: [
    { label: "Quem Somos", href: "/sobre" },
    { label: "Nossa História", href: "/sobre#historia" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "Conformidade LGPD", href: "/politica-de-privacidade#7" },
    { label: "Política de Cookies", href: "/politica-de-privacidade#6" },
  ],
};

// TODO: substituir as URLs quando os perfis forem criados
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/keymatic.tech", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/keymatic", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/keymatic.tech", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@keymatic", icon: Youtube },
];


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
              {/* WhatsApp */}
              <li>
                <a
                  href={getWhatsAppUrl("Olá! Vim pelo site da Keymatic.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <WhatsAppIcon size={13} className="text-[#25D366]" />
                  (11) 93429-4637
                </a>
              </li>
              {/* Telefone */}
              <li>
                <a
                  href="tel:+5511934294637"
                  className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Phone size={13} />
                  (11) 93429-4637
                </a>
              </li>
              {/* Email */}
              <li>
                <a
                  href="mailto:contato@keymatic.com.br"
                  className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Mail size={13} />
                  contato@keymatic.com.br
                </a>
              </li>
              {/* Endereço completo — link para Google Maps */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Aureliano+da+Silva+Arruda,+625+-+S%C3%A3o+Mateus,+S%C3%A3o+Paulo+-+SP,+03960-050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <MapPin size={13} className="shrink-0 mt-0.5" />
                  <span>
                    Rua Dr. Aureliano da Silva Arruda, 625
                    <br />
                    São Paulo — SP
                    <br />
                    CEP 03960-050
                  </span>
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 pt-5 border-t border-white/[0.04]">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Siga-nos
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-500 hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <KeymaticIcon size={26} />
            <span className="text-[12px] text-zinc-600">
              Keymatic &copy; 2026 &mdash; VTS Com&eacute;rcio e Servi&ccedil;os LTDA &mdash; CNPJ: 03.477.617/0001-90
            </span>
          </div>
          <a href="/sitemap.xml" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
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
              addressLocality: "São Paulo",
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
