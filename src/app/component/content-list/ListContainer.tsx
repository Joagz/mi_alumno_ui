import React from "react";

type Props = { children: JSX.Element[] | JSX.Element };

export const ListContainer = ({ children }: Props) => {
  return <ul className='ml-6 flex flex-col gap-4'>{children}</ul>;
};
