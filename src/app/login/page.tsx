"use client";

import styles from "./login.module.css";
import { Google, LoginRounded } from "@mui/icons-material";

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.division}>
        <div className={styles.loginCard}>
          <div className='flex gap-2 items-start flex-col justify-center flex-1'>
            <p className='text-2xl font-bold text-slate-800 text-center'>
              Ingresá a MiAlumno
            </p>

            {/* TODO: Google Sign In */}
            <a
              className='button button-secondary flex justify-center items-center gap-2 !rounded-md'
              href='/'
            >
              <Google></Google> <span>Cuenta de Google</span>
            </a>
          </div>
          <br />

          <div className='flex flex-col gap-4'>
            <form className='flex flex-col gap-3 '>
              <p className='text-sm font-light text-slate-800 text-left'>
                O con tu Email
              </p>

              <input
                type='text'
                name='username'
                placeholder='Usuario'
                className='p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
              />
              <input
                type='password'
                name='password'
                placeholder='Contraseña'
                className='p-3 transition-all focus:outline-none border rounded-md bg-white ease-out'
              />
              <button
                type='submit'
                className='button !rounded-md flex justify-center items-center gap-1'
              >
                <LoginRounded /> <span className='font-semibold'>Ingresar</span>
              </button>
              <p>
                O registra una <a href='/register'>cuenta nueva.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
