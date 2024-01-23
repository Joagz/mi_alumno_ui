import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import { Filterbar } from "components";
import "../globals.css";

const encode_sans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Alumno",
  description: "Listado de instituciones escolares en Mi Alumno.",
};

export default function RootLayout({
  listado,
  children,
}: {
  listado: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={encode_sans.className}>
        {children}
        <div className='flex justify-center items-center'>
          <div className='flex lg:w-3/4 xl:w-2/3 w-full justify-center items-start relative md:flex-row flex-col'>
            <Filterbar></Filterbar>
            <div className='flex-[2]'>{listado}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
