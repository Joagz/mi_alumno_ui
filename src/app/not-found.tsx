import { ArrowBackSharp } from "@mui/icons-material";
import React from "react";

function NotFound() {
  return (
    <main className='flex justify-center items-center p-8 flex-col h-screen'>
      <div className='flex gap-6 flex-col'>
        <div className="flex flex-col gap-2">
          <p className='text-sm'>ERROR 404</p>
          <h1 className='text-6xl'>¡Ups!</h1>
          <p className='text-xl'>
            Lo sentimos, la página a la que intentó acceder no se encuentra
            disponible.
          </p>
        </div>
        <a
          className='button button-secondary flex justify-center items-center gap-2'
          href='/'
        >
          <ArrowBackSharp />
          <span>Seguir explorando</span>
        </a>
      </div>
    </main>
  );
}

export default NotFound;
