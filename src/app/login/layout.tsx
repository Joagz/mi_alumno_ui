import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "../globals.css";
import { Link } from "component";
import styles from "./login.module.css";

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
    <html lang='es_AR'>
      <body className={encode_sans.className}>
        {" "}
        <nav className={styles.nav}>
          <p className='font-bold text-slate-800'>MiAlumno.com</p>

          <div className='flex gap-1'>
            <Link href='/'>Inicio</Link>
            <Link href='/register'>Registrarse</Link>
            <Link href='/ayuda'>Ayuda</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
