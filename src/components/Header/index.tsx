'use client'

import { MdOutlineMenu } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useMainContext } from "@/hooks/useMainContext";
import DarkModeBtn from "../DarkModeBtn";
export default function Header() {
  const { isOpenNavBar, toggleIsOpen, title } = useMainContext();

  return (
    <header className="bg-[#2c2e31] text-white relative h-20 z-0">
      <div className="flex justify-between pt-8 px-20">
        <div>
          {isOpenNavBar ? (
            <button
              className="z-10 h-full flex items-center"
              onClick={toggleIsOpen}
            >
              <FaArrowLeft className="text-4xl hover:bg-[#484b50] rounded-md p-1 transition" />
            </button>
          ) : (
            <button
              className="z-10 h-full flex items-center"
              onClick={toggleIsOpen}
            >
              <MdOutlineMenu className="text-4xl hover:bg-[#484b50] rounded-md p-1 transition" />
            </button>
          )}
        </div>

        <div className="h-full z-0">
          <h1 className="text-3xl font-bold flex items-center text-center">{ title }</h1>
        </div>

        <div className="text-4xl">
          <DarkModeBtn />
        </div>
      </div>

      <div className="w-full py-8 bg-[#2c2e31] shadow-2xl"></div>
    </header>
  )
}