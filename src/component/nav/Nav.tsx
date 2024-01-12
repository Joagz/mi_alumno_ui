import { FC } from "react";
import { Link, Selector } from "../";

export const Nav: FC = () => {
  return (
    <nav className='p-2 w-full flex justify-around z-[5000] shadow-md'>
      <ul className='flex justify-center items-center gap-4'>
        <li>
          <h4 className='text-xl font-light'>
            <span className='text-2xl'>MiAlumno</span>.com
          </h4>
        </li>
        <li>
          <div className='w-[1px] bg-slate-700 h-8'></div>
        </li>
        <li>
          <Link outlined href='/login'>
            Iniciar Sesión
          </Link>
        </li>
      </ul>
      <ul className='flex justify-center items-center gap-4'>
        <li>
          <Link href='/'>Inicio</Link>
        </li>
        <li>
          <Selector
            mainUrl='/escuelas'
            options={[
              { label: "Estatales", url: "/escuelas?sector=estatal" },
              { label: "Privadas", url: "/escuelas?sector=privado" },
              { label: "Urbanas", url: "/escuelas?ambito=urbana" },
              { label: "Rurales", url: "/escuelas?ambito=rural" },
            ]}
          >
            Escuelas
          </Selector>
        </li>
      </ul>
    </nav>
  );
};
