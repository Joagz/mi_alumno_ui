import { FC } from "react";
import { Link, Selector } from "../";

export const Nav: FC = () => {
  return (
    <nav className='p-2 w-full flex justify-around z-[5000]'>
      <ul className='flex justify-center items-center'>
        <li>
          <h4 className='text-xl'>MiAlumno.com</h4>
        </li>
      </ul>
      <ul className='flex justify-center items-center gap-4'>
        <li>
          <Link href='/'>Inicio</Link>
        </li>
        <li>
          <Selector
            options={[
              { label: "Estatales", url: "/escuelas?key=estatal" },
              { label: "Privadas", url: "/escuelas?key=privada" },
              { label: "Urbanas", url: "/escuelas?key=urbana" },
              { label: "Rurales", url: "/escuelas?key=rural" },
            ]}
          >
            Escuelas
          </Selector>
        </li>
      </ul>
    </nav>
  );
};
