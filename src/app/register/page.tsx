"use client";

import styles from "./register.module.css";
import { Google, LoginRounded } from "@mui/icons-material";
import { Nav, SideDivision } from "components";

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.division}>
        <div className={styles.navContainer}>
          <Nav
            overrideLinks={[
              { name: "Inicio", url: "/" },
              { name: "Registrarse", url: "/register" },
              { name: "Ayuda", url: "/ayuda" },
            ]}
          />
        </div>

        <div className={styles.loginCard}>
          <div className='flex gap-2 items-start flex-col justify-center flex-1'>
            <p className='text-2xl font-bold text-slate-800 text-center'>
              Crear una cuenta
            </p>
            <a
              className='button button-secondary flex justify-center items-center gap-2 !rounded-md'
              href='/'
            >
              <Google></Google> <span>Vincular con Google</span>
            </a>
          </div>
          <br />

          <div className='flex flex-col gap-4'>
            <form className='flex flex-col gap-3'>
              <input
                type='text'
                name='fullname'
                placeholder='Nombre completo'
                className='p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
              />
              <br />
              <div className='flex gap-3 flex-1 flex-wrap'>
                <input
                  type='text'
                  name='username'
                  placeholder='Usuario'
                  className='flex-1 p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
                />
                <input
                  type='text'
                  name='email'
                  placeholder='Correo Electrónico'
                  className='flex-1 p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
                />
              </div>
              <br />
              <input
                type='password'
                name='password'
                placeholder='Contraseña'
                className='p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
              />
              <p className='text-sm text-slate-800'>
                (La contraseña debe contener más de 8 carácteres, un número,
                mayúsculas y minúsculas)
              </p>
              <button
                type='submit'
                className='button !rounded-md flex justify-center items-center gap-1'
              >
                <LoginRounded /> <span className='font-semibold'>Ingresar</span>
              </button>
              <p>
                Si tenés cuenta podés <a href='/register'>ingresar.</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <SideDivision></SideDivision>
    </main>
  );
}
