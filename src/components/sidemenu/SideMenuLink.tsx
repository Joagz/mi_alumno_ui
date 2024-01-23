import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { ILink } from "types/link";

type Props = { link: ILink };

export const SideMenuLink = ({ link }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className='transition-all px-2 h-6 py-1 flex flex-1 gap-2 items-center text-md text-slate-700 font-medium rounded-md text-md hover:text-slate-950 hover:bg-slate-100'>
        <div className='flex-1 h-full justify-center items-center flex'>
          <a href={link.url} className='w-full hover:text-inherit text-inherit'>
            {link.name}
          </a>
        </div>
        {link.sublinks && (
          <div
            onClick={() => setOpen(!open)}
            className={`text-md rounded-md px-2.5 h-full flex justify-center items-center cursor-pointer hover:bg-slate-300`}
          >
            <>
              {open ? (
                <Remove
                  fontSize='inherit'
                  color='inherit'
                  className={`h-full`}
                />
              ) : (
                <Add fontSize='inherit' color='inherit' className={`h-full`} />
              )}
            </>
          </div>
        )}
      </div>
      {link.sublinks ? (
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col border-l ml-2 pl-2 gap-1`}
        >
          {link.sublinks.map((sublink, key) => (
            <div
              key={key}
              className='px-2 h-8 py-1 flex flex-1 gap-2 items-center text-md text-slate-700 font-medium rounded-md text-md hover:text-slate-950 hover:bg-slate-100'
            >
              <div className='flex-1 h-full justify-center items-center flex'>
                <a
                  href={sublink.url}
                  className='w-full hover:text-inherit text-inherit'
                >
                  {sublink.name}
                </a>
              </div>
            </div>
          ))}
        </div> 
      ) : (
        <></>
      )}
    </>
  );
};
