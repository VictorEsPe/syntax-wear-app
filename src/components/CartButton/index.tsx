import { useContext } from "react";
import IconBag from "@/assets/images/bag-icon.png";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
    onClick?: () => void;
}


export function CartButton({onClick}: CartButtonProps) {
     const { cart } = useContext(CartContext);
    
      const totalItems = Array.isArray(cart) 
        ? cart.reduce((total, item) => total + item.quantity, 0)
        : 0;

    return (
         <button
        className="relative cursor-pointer flex items-center"
        onClick={onClick}
      >
        <img src={IconBag} alt="Ícone do carrinho de compras" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-error text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </button>

    )
}