import Banner from "@/assets/images/banner.jpg";
import { Overlay } from "../Overlay";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";
import { products } from "../../mocks/products";


export function Hero() {
  const router = useRouter();

  const kriptonOne = products.find((product) => product.name === "Krypton One");

  console.log(kriptonOne);
  

  return (
    <div className="container">
      <section className=" relative h-125 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Homem sentado usando um tênis da
             SyntaxWear"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="Krypton One"
          subtitle="Transforme qualquer passo em presença"
          className="bottom-0 px-6 md:px-24 pb-24 justify-center 
     md:justify-end"
        >
          <Button
            variant="secondary"
            size="md"
            onClick={() =>
              router.navigate({
                to: "/products",
              })
            }
          >
            Ver modelos
          </Button>
          <Button
            size="lg"
            onClick={() =>
              router.navigate({
                to: "/products/$productId",
                params: { productId: String(kriptonOne?.id) },
              })
            }
          >
            Comprar
          </Button>
        </Overlay>
      </section>
    </div>
  );
}
