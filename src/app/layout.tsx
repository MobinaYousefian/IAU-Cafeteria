import type { Metadata, Viewport } from "next";
import "../styles/typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "منوی سلف دانشگاه آزاد اسلامی واحد لاهیجان",
  description: "منوی آنلاین کافه و رستوران سلف دانشگاه آزاد لاهیجان",
};

export const viewport: Viewport = {
  themeColor: "#0369A1FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
