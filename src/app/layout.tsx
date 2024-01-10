const encode_sans = Encode_Sans({ subsets: ["latin"] });
import "./globals.css";
import type { Metadata }  from "next";
import { Encode_Sans }    from "next/font/google";

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
    <html lang="en">
      <body className={encode_sans.className}>{children}</body>
    </html>
  );
}
