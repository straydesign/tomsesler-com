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

  return (
    <html lang="en">
      <head>
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
