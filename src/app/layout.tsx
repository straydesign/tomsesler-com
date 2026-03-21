import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Tom Sesler — Product Designer & Web Developer",
  description:
    "Tom Sesler designs and builds digital products. Portfolio at straydesign.co. Web design agency at straywebdesign.co — enterprise-grade websites for small businesses in Erie, PA.",
  metadataBase: new URL("https://tomsesler.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Tom Sesler — Product Designer & Web Developer",
    description:
      "Product designer and web developer. Portfolio at straydesign.co. Web design agency at straywebdesign.co.",
    url: "https://tomsesler.com",
    siteName: "Tom Sesler",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tom Sesler — Product Designer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Sesler — Product Designer & Web Developer",
    description:
      "Product designer and web developer. Portfolio at straydesign.co. Web design agency at straywebdesign.co.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tomsesler.com/#person",
      name: "Tom Sesler",
      alternateName: "Thomas Sesler",
      jobTitle: "Product Designer & Web Developer",
      description:
        "Product designer and web developer who designs and builds digital products. Runs a product design practice and a web design agency for small businesses in Erie, PA.",
      url: "https://tomsesler.com",
      email: "tom@straydesign.co",
      sameAs: [
        "https://straydesign.co",
        "https://straywebdesign.co",
        "https://www.linkedin.com/in/tom-sesler/",
      ],
      knowsAbout: [
        "Product Design",
        "UX Research",
        "UX Design",
        "UI Design",
        "Web Development",
        "React",
        "Next.js",
        "TypeScript",
        "Figma",
        "Heuristic Evaluation",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of New Hampshire",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://tomsesler.com/#website",
      url: "https://tomsesler.com",
      name: "Tom Sesler — Product Designer & Web Developer",
      description:
        "Tom Sesler designs and builds digital products. Portfolio at straydesign.co. Web design agency at straywebdesign.co.",
      publisher: { "@id": "https://tomsesler.com/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body{background:#0a0a0a;color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin:0}
              .skip-to-content{position:absolute;left:-9999px;top:0;z-index:50;padding:.75rem 1.5rem;background:#fff;color:#0a0a0a;font-size:.875rem;font-weight:500;text-decoration:none}
              .skip-to-content:focus{left:0}
            `,
          }}
        />
        <link rel="dns-prefetch" href="https://straydesign.co" />
        <link rel="dns-prefetch" href="https://straywebdesign.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
