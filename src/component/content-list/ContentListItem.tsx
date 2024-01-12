import React from "react";

type Props = { title: string; content: string; icon?: string };

export const ContentListItem = ({ title, content, icon }: Props) => {
  return (
    <li className='flex justify-center items-center sm:gap-2 gap-8 flex-wrap sm:flex-row flex-col-reverse'>
      {icon && (
        <div className='md:flex-1 md:flex hidden'>
          <img
            className='text-black fill-current'
            src={`/icon/${icon}`}
            alt={icon}
          />
        </div>
      )}
      <div className='xs:w-full sm:flex-[9]'>
        <h3 className='text-bold'>{title}</h3>
        <p className='text-lg'>{content}</p>
      </div>
    </li>
  );
};
