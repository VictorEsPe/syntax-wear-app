import { useState } from "react";
import IconMenu from "@/assets/images/icon-menu.png";
import { Link } from "@tanstack/react-router";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
    navLinks: NavLink[]
}

export function MenuMobile({navLinks}: MenuMobileProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer flex items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconMenu} alt="Ícone do menu mobile" />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} transition-all duration-600 ease-in-out fixed top-0 bottom-0 left-0 right-0 z-30`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/* e.stopPropagation impede que a função onClick da div pai se propague para a div filha,
        impedindo que a div filha também altere o estado menuIsOpen */}
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0
        bg-white pt-6 transition-all duration-500 ease-in-out w-full`}
          onClick={(e) => e.stopPropagation()}
        >
            <header className="bg-black py-5 px-5 text-white">
                <nav className="flex items-center justify-between">
                    <Link to="/sign-in" className="flex items-center gap-3">
                        <FaRegUserCircle className="h-6 w-6"/>
                        <p>Olá! Faça seu login</p>
                    </Link>

                    <IoMdClose className="cursor-pointer h-6 w-6" onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                </nav>
            </header>
          <ul className="p-4 h-[calc(100%-140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
            {navLinks.map(link => (
                <Link to={link.href} key={link.name} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {link.name}
                </Link>
            ))}

             <li>
                <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas lojas</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}
