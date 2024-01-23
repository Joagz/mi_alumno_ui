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
    <ul className='font-medium rounded-sm gap-2 justify-between flex items-start w-full md:flex-row flex-col'>
      <li className='flex justify-start items-start gap-1'>
        <SchoolOutlined />
        {Object.values(Orientacion)[props.orientacion]}
      </li>
      <li className='flex justify-start items-start gap-1'>
        <ShieldOutlined /> {Object.values(Sector)[props.sector]}
      </li>
      <li className='flex justify-start items-start gap-1'>
        <LocationCityOutlined /> {Object.values(Ambito)[props.ambito]}
      </li>
      <li className='flex justify-start items-start gap-1'>
        <PinDropOutlined />
        {`${ciudad}, ${Object.values(Provincias)[provincia]}, Argentina`}
      </li>
    </ul>
  );
};
