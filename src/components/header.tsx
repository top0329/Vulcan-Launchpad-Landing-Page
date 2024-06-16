"use client"
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown } from 'flowbite-react';

interface INav {
  title: string,
  url: string
}
const navs = [
  { title: "HOME", url: "" },
  { title: "features", url: "" },
  { title: "demo", url: "" },
  { title: "tutorials", url: "" },
  { title: "roadmap", url: "" },
  { title: "FAQs", url: "" },
]

const Header = () => {

  const [hidden, setHidden] = React.useState<boolean>(false);

  const _renderNavItem = ({title, url}: INav) => (
    <div key={title} className="text-white text-sm flex gap-2 items-center px-4 cursor-pointer hover:opacity-60">
      <Icon icon="radix-icons:dot-filled" /> 
      <span>{title}</span>
    </div>
  )

  return (
    <div className="relative w-full bg-[#0E0A21] flex p-2 justify-between items-center px-10 border-b border-gray-400">
      <Image
        className="cursor-pointer"
        src={`/imgs/logo.svg`}
        width={68}
        height={68}
        alt={"logo"}
        priority={true}
      />
      {/* <div className="hidden lg:flex">
        { navs.map((item: INav) => _renderNavItem (item)) }
      </div> */}
      <div className="flex gap-5 items-center">
        <button onClick={() => window.open("https://app.vulcanpad.tech/")} className="text-[15px] py-2 px-4 text-white border border-white rounded-lg hover:opacity-55 rounded-tr-[15px]">
          LAUNCH APP
        </button>
        {/* <Dropdown label=""  renderTrigger={() => <Icon icon="ph:list-fill" className="text-white text-2xl cursor-pointer hover:opacity-60 lg:hidden flex"/>}>
          {
            navs.map((_item: INav) => 
            <Dropdown.Item key={_item.title}>
              { _item.title }
            </Dropdown.Item>)
          }
        </Dropdown> */}
      </div>
    </div>
  );
};

export default Header;
