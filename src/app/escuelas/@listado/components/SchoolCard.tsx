import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  content: string;
  image?: string;
  location: string;
};

export function SchoolCard({ title, content, image, location }: Props) {
  return (
    <div className='h-[150px] justify-between items-center gap-4 cursor-pointer group w-full flex border rounded-md hover:border-sky-500 p-4 transition-all'>
      <div className='flex flex-col'>
        <span className='md:text-2xl text-xl font-bold text-slate-600 group-hover:text-sky-500 transition-all'>
          {title}
        </span>
        <span className='font-semibold text-slate-700'>
          {location}
        </span>
        <p className='md:text-lg text-md'>
          {content.substring(0, 100)}
          {content.length > 100 && "..."}
        </p>
      </div>
      {image && (
        <Image
          height={120}
          width={120}
          src={image}
          objectFit='contain'
          alt='LOGO'
        ></Image>
      )}
    </div>
  );
}
