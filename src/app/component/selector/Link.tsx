import React, { FC } from "react";

type Props = { href: string; children: string };

export const Link: FC<Props> = ({ children, href }: Props) => {
  return (
    <a href={href} className='selector'>
      {children}
    </a>
  );
};
