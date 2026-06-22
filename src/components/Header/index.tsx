import { Link } from "@tanstack/react-router";
import Logo from "@/assets/images/logo.png";
import ProfileIcon from "@/assets/images/profile-icon.png";
import FaqIcon from "@/assets/images/faq-icon.png";
import { ShoppingCart } from "../ShoppingCart";
import { MenuMobile } from "../MenuMobile";

export interface NavLink {
  name: string;
  href: string
}

const navLinks: NavLink[] = [
  {name: "Masculino", href: "/products/category/masculino"},
  {name: "Feminino", href: "/products/category/feminino"},
  {name: "Outlet", href: "/products/category/outlet"},
]

export function Header() {
  return (
    <div className="relative">
      <header className="fixed top-10 left-0 right-0 z-10 mx-10">
        <div
          className="max-w-330 mx-auto flex 
        justify-between items-center bg-white text-black px-7 py-3 rounded-2xl mt-5"
        >
          <Link to="/">
            <img src={Logo} alt="Logo SyntaxWear" className="w-32 md:36" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map(link => (
                <Link to={link.href} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10 items-center">
              <li className="hidden lg:block">
                <Link to="/our-stores">Nossas lojas</Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">Sobre</Link>
              </li>

              <li className="lg:hidden">
                <MenuMobile navLinks={navLinks}/>
              </li>
              <li className="hidden lg:block">
                <Link to="/sign-in">
                  <img src={ProfileIcon} alt="Profile" />
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">
                  <img src={FaqIcon} alt="Contact" />
                </ Link>
              </li>
              <li>
                <ShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
