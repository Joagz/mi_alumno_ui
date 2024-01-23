import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "../globals.css";

const encode_sans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portales",
  description: "Portales en MiAlumno. Subi tu portal, edita, administra la institucion.",
};

export default function IdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={encode_sans.className}>
        {children}    
      </body>
    </html>
  );
}
