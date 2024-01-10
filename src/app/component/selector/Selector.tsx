import "./selector.css";
import ArrowDropDownIcon    from "@mui/icons-material/ArrowDropDown";
import { FC }               from "react";

type Props = { children: string; options: { url: string; label: string }[] };

export const Selector: FC<Props> = ({ children, options }: Props) => {
  return (
    <div
      tabIndex={0}
      className='group w-fit selector focus:rounded-t-xl focus:rounded-b-none focus:border-b-0'
    >
      <div className='flex justify-center items-center'>
        {children} <ArrowDropDownIcon />
      </div>
      <div className='rounded-b-sm hover:bg-slate-100 divide-y group-focus-within:flex hidden absolute top-[100%] w-full z-[1000] bg-slate-50 flex-col selector-items'>
        {options.map((opt, key) => (
          <a key={key} className='selector-item' href={opt.url}>
            {opt.label}
          </a>
        ))}
      </div>
    </div>
  );
};
