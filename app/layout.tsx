import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DG Business Intelligence | Van data naar beslissingen",
  description:
    "DG Business Intelligence helpt organisaties data uit verschillende bronnen om te zetten in betrouwbare stuurinformatie. Power BI, SQL, datawarehousing, training en coaching.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
