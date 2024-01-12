import React, { FC } from "react";

type Props = { href: string; children: string; outlined?: boolean };

export const Link: FC<Props> = ({ children, href, outlined }: Props) => {
  return (
    <a
      href={href}
      className={`selector ${
        outlined && "border-slate-200 border bg-slate-50 !rounded-lg"
      }`}
    >
      {children}
    </a>
  );
};
