"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FC, useRef } from "react";

import edu1 from "../../../public/img/edu-2.jpg";
import edu2 from "../../../public/img/edu-2.jpg";
import edu3 from "../../../public/img/edu-2.jpg";

const duration = 3;
const delay = 10;

export const SideDivision: FC = () => {
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1 });

    tl.from(image2.current, {
      opacity: 0,
    })
      .to(image1.current, {
        opacity: 1,
        duration: duration,
      })
      .to(image1.current, {
        duration: duration,
        delay: delay,
        opacity: 0,
      })
      .from(image2.current, {
        opacity: 0,
      })
      .to(image2.current, {
        duration: duration,
        opacity: 1,
      })
      .to(image2.current, {
        duration: duration,
        delay: delay,
        opacity: 0,
      })
      .from(image3.current, {
        opacity: 0,
      })
      .to(image3.current, {
        duration: duration,
        opacity: 1,
      })
      .to(image3.current, {
        duration: duration,
        delay: delay,
        opacity: 0,
      });
  });

  return (
    <div
      className={
        "lg:flex-[1.2] lg:h-auto w-full border-r lg:relative absolute !bg-black top-0 left-0 h-full"
      }
    >
      <div ref={image1} className='opacity-0'>
        <div className='hidden lg:flex flex-col gap-5 w-full absolute bottom-0 left-0 p-8 pb-12 z-50'>
          <span className='text-white font-medium text-3xl md:text-6xl'>
            Lograr una educación más conectada
          </span>
          <span className=' text-white font-light md:text-xl text-lg'>
            Nuestro trabajo es comunicar al alumno con su escuela y proporcionar
            a la institución una plataforma educativa online, sin necesidad de
            contratar desarrolladores, y con todas las herramientas necesarias
            para la colaboración y distribución del contenido.{" "}
          </span>
        </div>

        <Image
          className='opacity-50 absolute top-0 left-0 h-full w-full object-cover'
          src={edu1}
          fill
          alt={"Educacion"}
        />
      </div>
      <div ref={image2} className='opacity-0'>
        <div className='hidden lg:flex flex-col gap-5 w-full absolute bottom-0 left-0 p-8 pb-12 z-50'>
          <span className='text-white font-medium text-3xl md:text-6xl'>
            Estudiar desde casa es posible
          </span>
          <div>
            <span className=' text-white font-light md:text-xl text-lg'>
              Uno de los objetivos de MiAlumno, es brindar al profesor una
              plataforma para subir sus clases, ya sean archivos, imágenes,
              videos, audios.
            </span>
            <br />
            <span className=' text-white font-light md:text-xl text-lg'>
              La escuela tiene la opción de crear una sección para subir las
              clases por año, curso, y materia.
            </span>
          </div>
        </div>
        <Image
          className='opacity-50 absolute top-0 left-0 h-full w-full object-cover'
          src={edu2}
          fill
          alt={"Educacion"}
        />
      </div>
      <div ref={image3} className='opacity-0'>
        <div className='hidden lg:flex flex-col gap-5 w-full absolute bottom-0 left-0 p-8 pb-12 z-50'>
          <span className='text-white font-medium text-3xl md:text-6xl'>
            Solo instituciones oficiales
          </span>
          <span className=' text-white font-light md:text-xl text-lg'>
            Verificamos que las escuelas inscriptas sean oficiales y estén
            validadas por la ley. Nuestra misión es lograr una educación
            conectada y accesible, pero sobre todo, segura.
          </span>
        </div>
        <Image
          className='opacity-50 absolute top-0 left-0 h-full w-full object-cover'
          src={edu3}
          fill
          alt={"Educacion"}
        />
      </div>
    </div>
  );
};
