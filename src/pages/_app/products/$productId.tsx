import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/currency-format";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CEPForm } from "../../../components/CEPForm";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() { 
  const {add} = useContext(CartContext)

  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  if(!filteredProduct) return

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;

  const inInstallmentPrice = originalPrice / 6;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 bg-surface">
      <nav className="text-black text-sm mb-5">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>

      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-125 bg-white rounded-2xl"
        />

        <div className="text-black">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>

          <p className="mb-2">Cor: {filteredProduct?.color}</p>

          <p className="line-through text-sm text-[#878787]">
            {formatCurrency(originalPrice)}
          </p>

          <p className="text-2xl font-bold">
            {formatCurrency(discountPrice)} no PIX
          </p>

          <p className="text-sm text-[#878787]">
            Você economizou <span className="font-semibold">10%</span>
          </p>

          <p className="mb-2">
            ou <span className="font-semibold">6X</span> de{" "}
            <span className="font-semibold">
              {formatCurrency(inInstallmentPrice)}
            </span>
          </p>

          <p className="max-w-125 my-5">{filteredProduct?.description}</p>

          <div className="mb-3">
            <p className="text-sm">Calcular o prazo de entrega</p>

            <CEPForm />
          </div>
          
          <button className="bg-black text-white rounded-md p-5 w-full cursor-pointer" onClick={() => add(filteredProduct)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
