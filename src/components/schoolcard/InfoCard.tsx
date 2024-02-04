import {
  SchoolOutlined,
  ShieldOutlined,
  LocationCityOutlined,
  PinDropOutlined,
} from "@mui/icons-material";
import { Provincias } from "types/provincia";
import { Ambito, Orientacion, Sector } from "types/school-attrbs";
import { Ubicacion } from "types/school-attrbs/Ubicacion";

type Props = {
  orientacion: Orientacion;
  sector: Sector;
  ambito: Ambito;
  ubicacion: Ubicacion;
};

export const InfoCard = (props: Props) => {
  const { ciudad, provincia } = props.ubicacion;
  return (
    <ul className='font-medium rounded-sm gap-2 justify-between flex items-start w-full md:flex-row flex-col '>
      <li className='text-xs flex justify-start items-center gap-1'>
        <SchoolOutlined />
        <span>{Object.values(Orientacion)[props.orientacion]}</span>
      </li>
      <li className='text-xs flex justify-start items-center gap-1'>
        <ShieldOutlined />
        <span> {Object.values(Sector)[props.sector]}</span>
      </li>
      <li className='text-xs flex justify-start items-center gap-1'>
        <LocationCityOutlined />
        <span> {Object.values(Ambito)[props.ambito]}</span>
      </li>
      <li className='text-xs flex justify-start items-center gap-1'>
        <PinDropOutlined />
        <span>
          {`${ciudad}, ${Object.values(Provincias)[provincia]}, Argentina`}
        </span>
      </li>
    </ul>
  );
};
