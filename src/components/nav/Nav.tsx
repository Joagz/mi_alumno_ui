"use client";
import { create } from "zustand";
import { FC, useEffect, useRef } from "react";
import { Link, OpenSidebarButton, Selector, SideMenu } from "components";
import links from "json/links.json";
import { ILink } from "types/link";

interface State {
  open: boolean;
  setOpen: () => void;
  setClose: () => void;
}

const sideMenuState = create<State>((set) => ({
  open: false,
  setClose: () => set({ open: false }),
  setOpen: () => set({ open: true }),
}));

interface Props {
  forceEnable?: boolean;
  overrideLinks?: ILink[];
}

export const Nav: FC<Props> = ({ forceEnable = false, overrideLinks }) => {
  const ref = useRef<HTMLDivElement>(null);
  const state = sideMenuState();

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      state.setClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav ref={ref} className='flex px-8 p-6 w-full justify-between !z-[10000]'>
      <ul className='flex justify-center items-center gap-8'>
        <OpenSidebarButton forceEnable={forceEnable} setOpen={state.setOpen} />
        <li className='flex gap-4 items-center'>
          <a
            href='/'
            style={{ textDecoration: "none" }}
            className='font-bold text-slate-800'
          >
            /icono/ MiAlumno.com
          </a>{" "}
        </li>
      </ul>
      <ul className={`hidden justify-center items-center gap-4 lg:flex`}>
        {!overrideLinks &&
          links.map((link, key) => {
            if (link.sublinks == undefined) {
              return (
                <li key={key}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              );
            } else {
              return (
                <li key={key}>
                  <Selector
                    mainUrl={link.url}
                    options={[
                      ...link.sublinks.map((sublink) => ({
                        label: sublink.name,
                        url: sublink.url,
                      })),
                    ]}
                  >
                    {link.name}
                  </Selector>
                </li>
              );
            }
          })}
        {overrideLinks &&
          overrideLinks.map((link, key) => {
            if (link.sublinks == undefined) {
              return (
                <li key={key}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              );
            } else {
              return (
                <li key={key}>
                  <Selector
                    mainUrl={link.url}
                    options={[
                      ...link.sublinks.map((sublink) => ({
                        label: sublink.name,
                        url: sublink.url,
                      })),
                    ]}
                  >
                    {link.name}
                  </Selector>
                </li>
              );
            }
          })}
      </ul>
      <SideMenu
        overrideDefaultLinks={overrideLinks ? overrideLinks : undefined}
        forceEnable
        setClose={state.setClose}
        open={state.open}
      ></SideMenu>
    </nav>
  );
};
