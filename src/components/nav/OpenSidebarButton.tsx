import { MenuRounded } from "@mui/icons-material";
import React from "react";

type Props = { forceEnable?: boolean; setOpen: () => void };

export const OpenSidebarButton = ({ forceEnable, setOpen }: Props) => {
  return (
    <div
      className={`${
        forceEnable ? "flex" : "lg:hidden flex"
      }  cursor-pointer p-2 rounded-md hover:bg-slate-100 transition-all text-slate-950`}
      onClick={setOpen}
    >
      <MenuRounded className='text-slate-900' color='inherit' />
    </div>
  );
};
