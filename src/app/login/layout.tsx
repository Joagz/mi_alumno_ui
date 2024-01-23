import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "../globals.css";
import { Nav } from "components";

const encode_sans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Inicia sesión a MiAlumno.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={encode_sans.className}>
        <Nav
          overrideLinks={[
            { name: "Inicio", url: "/" },
            { name: "Registrarse", url: "/register" },
            { name: "Ayuda", url: "/ayuda" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
