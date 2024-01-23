"use client";
import { MenuRounded } from "@mui/icons-material";
import { ILink } from "types/link";
import { SideMenuLink } from "./SideMenuLink";
import defaultLinks from "json/links.json";

type Props = {
  overrideDefaultLinks?: ILink[];
  links?: ILink[];
  setClose: () => void;
  open: boolean;
  forceEnable?: boolean;
};

export const SideMenu = ({
  links,
  setClose,
  open = false,
  forceEnable = false,
  overrideDefaultLinks,
}: Props) => {
  return (
    <div
      className={` ${
        forceEnable ? "flex" : "lg:hidden flex"
      } fixed lg:w-1/4 md:w-1/3 w-2/3 top-0 left-0 flex-col border-r h-full bg-white z-[5000] !transition-all p-6 px-8 ${
        open ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className={`flex justify-start`}>
        <div>
          <div
            className='cursor-pointer p-2 rounded-md hover:bg-slate-100 transition-all text-slate-950'
            onClick={setClose}
          >
            <MenuRounded className='text-slate-900' color='inherit' />
          </div>
        </div>
      </div>
      {defaultLinks && (
        <div
          className={`${
            open ? "lg:hidden flex" : "hidden"
          } flex-col gap-2 justify-center items-center w-full p-4`}
        >
          <div className='w-full flex flex-col gap-1'>
            <p className='!text-slate-700 font-semibold text-xs'>Mi Alumno</p>
            {!overrideDefaultLinks &&
              defaultLinks?.map((link, key) => (
                <SideMenuLink link={link} key={key} />
              ))}
            {overrideDefaultLinks &&
              overrideDefaultLinks?.map((link, key) => (
                <SideMenuLink link={link} key={key} />
              ))}
          </div>
        </div>
      )}
      {/* LINKS */}
      {links && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col gap-2 justify-center items-center w-full p-4`}
        >
          <div className='w-full flex flex-col gap-1'>
            <p className='!text-slate-700 font-semibold text-xs'>
              Portal Público
            </p>
            {links?.map((link, key) => (
              <SideMenuLink link={link} key={key} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
