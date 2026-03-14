import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom Sesler — Product Designer & Web Developer",
  description:
    "Tom Sesler designs and builds digital products. Portfolio at straydesign.co. Web design agency at straywebdesign.co — enterprise-grade websites for small businesses in Erie, PA.",
  metadataBase: new URL("https://tomsesler.com"),
  openGraph: {
    title: "Tom Sesler — Product Designer & Web Developer",
    description:
      "Product designer and web developer. Portfolio at straydesign.co. Web design agency at straywebdesign.co.",
    url: "https://tomsesler.com",
    siteName: "Tom Sesler",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tom Sesler — Product Designer & Web Developer",
    description:
      "Product designer and web developer. Portfolio at straydesign.co. Web design agency at straywebdesign.co.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
