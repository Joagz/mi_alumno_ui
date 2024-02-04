"use client";

import { CloseOutlined } from "@mui/icons-material";
import React from "react";
import { Provincias } from "types/provincia";
import { Ambito, Sector, Orientacion } from "types/school-attrbs";
import { InfoCard } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {school_id?: string};

export const SchoolPage = (props: Props) => {
  const { back } = useRouter();

  return (
    <>
      <div className='fixed z-[500] top-0 left-0 w-full h-full bg-black opacity-40' onClick={back}></div>
      <article className='fixed rounded-lg flex justify-center items-center overflow-y-auto h-full md:h-[90%] w-full  md:w-2/3 lg:w-1/2 -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]  z-[1000] bg-white border flex-col gap-4'>
        <div className='absolute w-full top-0 left-0 bg-white p-4 h-14 justify-end items-center flex'>
          <div
            aria-label='Cerrar panel'
            aria-roledescription='button'
            className='cursor-pointer hover:text-red-900'
            onClick={back}
          >
            <CloseOutlined />
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center w-full'>
          <Image
            src={"/img/edu-1.jpg"}
            alt='imagen'
            width={1600}
            height={500}
            style={{ minWidth: "100%", maxHeight: 500, objectFit: "cover" }}
          />
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-full justify-center items-start p-12 gap-14'>
            <InfoCard
              ambito={Ambito.Urbano}
              sector={Sector.Estatal}
              orientacion={Orientacion.Electromecánica}
              ubicacion={{
                ciudad: "Coronda",
                provincia: Provincias["Santa Fe"],
              }}
            ></InfoCard>
            <div>
              <h1 className='my-4 text-3xl font-semibold'>
                E.E.T.P N. 612 "Eudocio de los Santos Giménez"
              </h1>
              <h4 className='font-light text-sm'>
                Optional subtitle Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet, deleniti?
              </h4>
            </div>
            <br />
            <p className='text-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, corporis. Sapiente repellendus enim doloribus aliquam
              tempora quod consequuntur laudantium, sint esse culpa adipisci
              eos, fuga cum voluptas exercitationem sed, impedit nihil!
              Molestiae dignissimos eaque eius esse autem cumque distinctio
              provident est itaque enim nam quas beatae facilis sequi, veniam
              dolorem.
            </p>
          </div>
        </div>
      </article>{" "}
    </>
  );
};
