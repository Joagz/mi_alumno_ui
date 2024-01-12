import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encode_sans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Alumno",
  description:
    "Mi Alumno es un sitio web donde las escuelas y los alumnos pueden compartir información.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es_AR'>
      <body className={encode_sans.className}>{children}</body>
    </html>
  );
}
