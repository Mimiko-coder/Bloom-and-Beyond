import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomandbeyond.example"),
  title: {
    default: "Bloom & Beyond | Beautiful Moments, Made with Love",
    template: "%s | Bloom & Beyond",
  },
  description:
    "Bloom & Beyond creates premium gifts, elegant décor, and unforgettable surprise experiences for birthdays, anniversaries, proposals, and every special moment.",
  keywords: [
    "Bloom & Beyond",
    "surprise decorations",
    "romantic room setup",
    "proposal decorations",
    "gift boxes",
    "anniversary setup",
    "hotel room surprise",
    "apology gifts",
  ],
  openGraph: {
    title: "Bloom & Beyond | Beautiful Moments, Made with Love",
    description:
      "Premium gifting, decoration, and surprise experiences crafted to create meaningful memories.",
    type: "website",
    locale: "en_US",
    siteName: "Bloom & Beyond",
    images: [
      {
        url: "/images/proposal-beach.jpeg",
        width: 1200,
        height: 1600,
        alt: "Bloom & Beyond proposal experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom & Beyond",
    description:
      "Beautiful gifts, elegant décor, and unforgettable surprises—made with love.",
    images: ["/images/proposal-beach.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
