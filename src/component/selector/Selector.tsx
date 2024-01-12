import "./selector.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FC } from "react";

type Props = {
  children: string;
  options: { url: string; label: string }[];
  mainUrl: string;
};

export const Selector: FC<Props> = ({ children, options, mainUrl }: Props) => {
  return (
    <div
      tabIndex={0}
      className='group w-fit selector hover:rounded-t-xl hover:rounded-b-none hover:border-b-0 z-[1000]'
    >
      <a
        href={mainUrl}
        className='flex-1 flex text-inherit justify-center items-center'
      >
        {children} <ArrowDropDownIcon />
      </a>
      <div className='rounded-b-sm hover:bg-slate-100 divide-y group-hover:flex hidden absolute top-[100%] w-full bg-slate-50 flex-col selector-items'>
        {options.map((opt, key) => (
          <a key={key} className='selector-item' href={opt.url}>
            {opt.label}
          </a>
        ))}
      </div>
    </div>
  );
};
