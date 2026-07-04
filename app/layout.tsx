import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "DG Business Intelligence | Power BI, SQL & Business Intelligence Consultant",
    template: "%s | DG Business Intelligence",
  },

  description:
    "DG Business Intelligence helpt organisaties betere beslissingen te nemen met Power BI, SQL, datamodellen en dashboards. Praktische consultancy, trainingen en BI-oplossingen die direct toepasbaar zijn.",

  keywords: [
    "Power BI",
    "SQL",
    "Business Intelligence",
    "Dashboard",
    "Datawarehouse",
    "Datamodel",
    "Consultant",
    "Trainer",
    "Power Query",
    "Microsoft Fabric",
  ],

  authors: [{ name: "Tim de Goede" }],

  creator: "DG Business Intelligence",

  metadataBase: new URL("https://degoedebi.nl"),

  openGraph: {
    title:
      "DG Business Intelligence | Power BI, SQL & Business Intelligence Consultant",
    description:
      "DG Business Intelligence helpt organisaties betere beslissingen te nemen met Power BI, SQL, datamodellen en dashboards. Praktische consultancy, trainingen en BI-oplossingen die direct toepasbaar zijn.",
    url: "https://degoedebi.nl",
    siteName: "DG Business Intelligence",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "DG Business Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DG Business Intelligence",
    description:
      "Power BI, SQL, dashboards en Business Intelligence consultancy.",
    images: ["/assets/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "CPl2H1UWDA-8aE2UGtz7xYIfK1vVsB3MiI_x2Rs7TcA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/assets/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}