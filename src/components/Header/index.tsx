import Logo from "@/assets/images/logo.png";
import ProfileIcon from "@/assets/images/profile-icon.png";
import FaqIcon from "@/assets/images/faq-icon.png";
import BagIcon from "@/assets/images/bag-icon.png";

export function Header() {
  return (
    <div className="relative">
      <header className="fixed bg-white top-0 left-0 right-0 z-10 mx-10">
        <div className="max-w-[1320px] mx-auto flex 
        justify-between items-center px-7 py-5 rounded-2xl mt-5">
          <img src={Logo} alt="Logo SyntaxWear" className="w-32 md:36" />

          <nav className="hidden md:block">
            <ul className="flex gap-10">
                <li><a href="#">Masculino</a></li>
                <li><a href="#">Feminino</a></li>
                <li><a href="#">Outlet</a></li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
                <li className="hidden md:block"><a href="#">Nossas lojas</a></li>
                <li className="hidden md:block"><a href="#">Sobre</a></li>
                <li><a href="#"><img src={ProfileIcon} alt="Profile" /></a></li>
                <li><a href="#"><img src={FaqIcon} alt="Contact" /></a></li>
                <li><a href="#"><img src={BagIcon} alt="Products" /></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
