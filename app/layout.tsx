import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";
import { metadataBase, pageMetadata } from "@/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: metadataBase(),
  ...pageMetadata({ title: SITE.name, description: SITE.description, path: "/" }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        {/* TEMP banner — remove once design is ratified (ADR #1401 + Figma). */}
        <div className="nb-temp-banner" role="note">
          TEMP SCAFFOLD · structure + IA only · placeholder visuals pending Figma + @nebbos/brand
          (ADR-270)
        </div>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
