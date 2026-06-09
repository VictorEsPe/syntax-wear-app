import { Link } from "@tanstack/react-router";
import LogoImg from "@/assets/images/logo.png";

export function Logo() {
    return (
        <Link to="/" className="self-center">
            <img src={LogoImg} alt="Logo Syntax-wear" className="w-40" />
        </Link>
    );
}