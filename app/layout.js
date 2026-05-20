import "./globals.css";

export const metadata = {
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
  ],
  openGraph: {
    title: "Maa Ambey Jewellers | Custom Gold & Silver Jewellery",
    description:
      "Your design, our craft. Send a reference image and we'll handcraft it in gold or silver.",
    type: "website",
    locale: "en_IN",
    siteName: "Maa Ambey Jewellers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
