import categorias from "json/categorias.json";
import { FilterItem } from "./FilterItem";
import { ProvinciasService } from "api/provincias";

export async function Filterbar() {
  const provincias = await ProvinciasService.getProvincias();
  
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
