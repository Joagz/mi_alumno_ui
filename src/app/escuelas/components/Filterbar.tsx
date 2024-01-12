import { cache } from "react";
import categorias from "../json/categorias.json";
import { FilterItem } from "./FilterItem";
const path = process.env.NEXT_PUBLIC_PRONVINCIAS_PATH + "?campos=nombre";

// ! TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
// ? TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
//   TODO: Crear una API para CATEGORIAS
// ! TODO: Crear una API para CATEGORIAS

async function getProvincias() {
  const data = (await fetch(path!)).json();
  return data;
}

const filteredData = cache(async () => {
  const data = await getProvincias();
  var res: { value: string }[] = [];
  data.provincias
    .sort(function (a: any, b: any) {
      return a.id - b.id;
    })
    .map((provincia: { nombre: string }) => {
      res.push({
        value: provincia.nombre,
      });
    });
  return res.sort();
});

export async function Filterbar() {
  const provincias = await filteredData();
  return (
    <div className='flex-1 p-8 px-4 w-full md:w-auto left-0 top-0 z-50'>
      <div className='w-full h-full bg-white rounded-md p-6 gap-8 flex flex-col transition-all'>
        <FilterItem
          title={"Sector"}
          items={[
            { value: "Estatal" },
            { value: "Privado" },
          ]}
        ></FilterItem>
        <FilterItem
          title={"Ámbito"}
          items={[
            { value: "Urbano" },
            { value: "Rural" },
          ]}
        ></FilterItem>

        <FilterItem title={"Orientación"} items={categorias}></FilterItem>
        <FilterItem title={"Jurisdicción"} items={provincias}></FilterItem>
      </div>
    </div>
  );
}
