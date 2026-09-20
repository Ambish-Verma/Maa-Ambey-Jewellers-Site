import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "optional",
  variable: "--serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "optional",
  variable: "--sans",
});

export const metadata = {
  metadataBase: new URL("https://www.maaambeyjewellers.live"),
  title: "Maa Ambey Jewellers | Custom Gold & Silver Jewellery – Howrah",
  description:
    "Handcrafted custom gold & silver jewellery from Liluah, Howrah. Send your reference image via WhatsApp and we'll bring it to life. BIS Hallmarked. 22K Gold & 925 Silver.",
  keywords: [
    "gold jewellery",
    "silver jewellery",
    "custom jewellery",
    "handcrafted jewellery",
    "Howrah jewellers",
    "Liluah jewellers",
    "BIS hallmarked gold",
    "22K gold",
    "925 silver",
    "bridal jewellery",
    "Maa Ambey Jewellers",
    "custom gold ring Howrah",
    "custom silver necklace Liluah",
    "wedding jewellery Howrah",
    "gold bangle designs",
    "silver anklet Howrah",
    "mangalsutra custom design",
    "AI jewellery design",
  ],
  authors: [{ name: "Maa Ambey Jewellers" }],
  icons: {
    icon: "/assets/icon.webp",
  },
  alternates: {
    canonical: "https://www.maaambeyjewellers.live",
  },
  verification: {
    google: "64edfb09c1a7bb12",
  },
  openGraph: {
    title: "Maa Ambey Jewellers | Liluah – Howrah",
    description:
      "Your design, our craft. Send a reference image and we'll handcraft it.",
    type: "website",
    locale: "en_IN",
    siteName: "Maa Ambey Jewellers",
    url: "https://www.maaambeyjewellers.live",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maa Ambey Jewellers — Custom Gold & Silver Jewellery in Howrah",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Ambey Jewellers | Liluah – Howrah",
    description:
      "Your design, our craft. Send a reference image and we'll handcraft it.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${jost.variable}`}>
      <body suppressHydrationWarning>{children}<SpeedInsights /><Analytics /></body>
    </html>
  );
}
