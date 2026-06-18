import { Link } from "@tanstack/react-router";
import Logo from "@/assets/images/logo.png";
import ProfileIcon from "@/assets/images/profile-icon.png";
import FaqIcon from "@/assets/images/faq-icon.png";
import { ShoppingCart } from "../ShoppingCart";

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

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <Link to="/products">Masculino</Link>
              </li>
              <li>
                <a href="#">Feminino</a>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
              <li className="hidden md:block">
                <Link to="/our-stores">Nossas lojas</Link>
              </li>
              <li className="hidden md:block">
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/sign-in">
                  <img src={ProfileIcon} alt="Profile" />
                </Link>
              </li>
              <li>
                <a href="#">
                  <img src={FaqIcon} alt="Contact" />
                </a>
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
