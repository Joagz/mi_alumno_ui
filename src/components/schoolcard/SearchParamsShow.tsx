"use client";

import { ArrowRightOutlined } from "@mui/icons-material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  orientacion?: string;
  sector?: string;
  ambito?: string;
  jurisdiccion?: string;
};

function capitalizeAndSpace(str: string) {
  return str.replace("_", " ").toUpperCase();
}

export const SearchParamsShow = ({
  jurisdiccion,
  sector,
  ambito,
  orientacion,
}: Props) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function removeParam(paramName: string): void {
    const urlParams = new URLSearchParams(params);
    urlParams.delete(paramName);
    replace(`${pathName}?${urlParams.toString()}`);
  }

  return (
    <div className='flex gap-2 text-sky-700'>
      {jurisdiccion && (
        <>
          <ArrowRightOutlined />
          <b
            className='hover:text-yellow-600 cursor-pointer'
            onClick={() => removeParam("jurisdiccion")}
          >
            {capitalizeAndSpace(jurisdiccion)}
          </b>
        </>
      )}
      {sector && (
        <>
          <ArrowRightOutlined />
          <b
            className='hover:text-yellow-600 cursor-pointer'
            onClick={() => removeParam("sector")}
          >
            {capitalizeAndSpace(sector)}
          </b>
        </>
      )}

      {ambito && (
        <>
          <ArrowRightOutlined />
          <b
            className='hover:text-yellow-600 cursor-pointer'
            onClick={() => removeParam("ambito")}
          >
            {capitalizeAndSpace(ambito)}
          </b>
        </>
      )}

      {orientacion && (
        <>
          <ArrowRightOutlined />
          <b
            className='hover:text-yellow-600 cursor-pointer'
            onClick={() => removeParam("orientacion")}
          >
            {capitalizeAndSpace(orientacion)}
          </b>
        </>
      )}
    </div>
  );
};
