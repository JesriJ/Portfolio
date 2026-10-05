import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono, Outfit } from "next/font/google";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const sans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

/* Outfit 100 stands in for Uni Sans Thin (closest free geometric thin).
   Drop UniSansThin.woff2 into src/fonts and switch to next/font/local to replace. */
const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <div className="atmosphere" aria-hidden="true">
          <div className="atmosphere-wash" />
          <div className="atmosphere-grid" />
          <div className="atmosphere-grain" />
          <div className="atmosphere-frame" />
          <p className="atmosphere-vertical">Software · Systems · AI</p>
        </div>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream focus:px-3 focus:py-2 focus:text-charcoal"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative z-10 min-h-[70vh] flex-1">
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
