"use client";

import { useGSAP } from "@gsap/react";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

type Props = {
  title: string;
  items: { value: string }[];
};

export const FilterItem = ({ title, items }: Props) => {
  const params = useSearchParams();
  const [show, setShow] = useState(false);
  const list = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const { replace } = useRouter();

  useGSAP(() => {
    if (!show) list.current!.style.display = "none";
    else list.current!.style.display = "flex";
  }, [show]);

  const onclick = () => {
    setShow(!show);
  };

  return (
    <div className='flex flex-col gap-2 flex-1'>
      <div
        className='transition-all rounded-sm hover:bg-blue-50 p-2 text-2xl font-semibold text-stone-600 cursor-pointer justify-start items-center flex gap-2'
        onClick={onclick}
      >
        <span className='flex-1'>{title}</span>
        <span
          className={`transition-all flex justify-center items-center ${
            show ? "rotate-90 " : "-rotate-90 "
          } `}
        >
          <ArrowBackIosNewOutlined fontSize='small' />
        </span>
      </div>
      <div ref={list} className='flex-col hidden p-2'>
        <div className='w-full h-[1px] bg-stone-300'></div>
        <ul className='flex-col gap-2'>
          {items.map((item, key) => (
            <li className="cursor-pointer"  key={key}>
              <a
                onClick={() => {
                  const urlSearchParams = new URLSearchParams(params);
                  urlSearchParams.set(
                    normalizeStr(title),
                    normalizeStr(item.value)
                  );
                  console.log(urlSearchParams.toString());
                  replace(`${pathName}?${urlSearchParams.toString()}`);
                }}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        <div className='w-full h-[1px] bg-stone-300'></div>
      </div>
    </div>
  );
};

function normalizeStr(str: string) {
  return str
    .toLowerCase()
    .replace(" ", "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
