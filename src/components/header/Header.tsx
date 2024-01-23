import { FC } from "react";
import styles from "./header.module.css";
import { SearchRounded } from "@mui/icons-material";
type Props = {
  title?: string;
  subtitle?: string;
  disableSearch?: boolean;
};
export const Header: FC<Props> = ({
  title,
  subtitle,
  disableSearch = false,
}) => {
  return (
    <header className={styles.header}>
      <div className='xs:w-full md:w-1/2 gap-4 flex flex-col justify-center items-center m-2 z-[1000] text-white'>
        <span className='text-3xl md:text-5xl font-bold !text-white text-center'>
          {title || "Bienvenido, Mi Alumno."}
        </span>
        <p className='text-center text-xl !text-white'>
          {subtitle ||
            "Trabajamos para conectar a las escuelas con sus alumnos desde cualquier parte del país."}
        </p>
        {!disableSearch && (
          <form
            action={"/escuelas"}
            className='focus-within:scale-100 scale-95 transition-all flex sm:w-[500px] xs:w-full'
          >
            <input
              placeholder='Buscá tu escuela'
              type='text'
              className='input !px-6 !flex-grow border-white border-2 border-r-0 !rounded-r-none'
            />
            <button
              aria-label="Botón de Búsqueda"
              name='query'
              type='submit'
              className='button !flex-shrink !rounded-l-sm '
            >
              <SearchRounded className='!text-3xl' />
            </button>
          </form>
        )}
      </div>
    </header>
  );
};
