import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import QuizBanner from "../components/QuizBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://keymatic.com.br";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Keymatic — Tecnologia que funciona enquanto você dorme",
    template: "%s — Keymatic",
  },
  description:
    "E-commerce de elite, automação inteligente e consultoria em IA. Da solidez de 20 anos da VTS Informática nasce a Keymatic.",
  keywords: [
    "e-commerce",
    "automação",
    "inteligência artificial",
    "consultoria IA",
    "WhatsApp automação",
    "loja virtual",
    "Keymatic",
    "VTS Informática",
    "automação WhatsApp",
    "Evolution API",
    "e-commerce de elite",
    "consultoria inteligência artificial",
  ],
  authors: [{ name: "Keymatic", url: SITE_URL }],
  creator: "Keymatic",
  publisher: "Keymatic — VTS Comércio e Serviços LTDA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Keymatic — Tecnologia que funciona enquanto você dorme",
    description:
      "E-commerce de elite, automação inteligente e consultoria em IA para quem quer crescer de verdade.",
    url: SITE_URL,
    siteName: "Keymatic",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keymatic — E-commerce, Automação e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keymatic — Tecnologia que funciona enquanto você dorme",
    description:
      "E-commerce de elite, automação inteligente e consultoria em IA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
        <QuizBanner />
        <GoogleAnalytics />

        {/* Organization Schema — JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Keymatic",
              legalName: "VTS Comércio e Serviços LTDA",
              url: "https://keymatic.com.br",
              logo: "https://keymatic.com.br/logo-keymatic-full.svg",
              description: "E-commerce de elite, automação inteligente e consultoria em IA. Da solidez de 20 anos da VTS Informática nasce a Keymatic.",
              foundingDate: "2005",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-93429-4637",
                contactType: "sales",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://www.instagram.com/keymatic.tech",
              ],
              founder: [
                { "@type": "Person", name: "Tércio Rigonati", jobTitle: "CTO" },
                { "@type": "Person", name: "Valéria Barboza", jobTitle: "COO" },
                { "@type": "Person", name: "Matheus Barboza", jobTitle: "Estrategista de Inovação" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
