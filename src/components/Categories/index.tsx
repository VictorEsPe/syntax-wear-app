import { useRouter } from "@tanstack/react-router";
import { categories } from "../../mocks/categories";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export function Categories() {
  const router = useRouter();

  return (
    <section
      className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10
    overflow-x-auto snap-x snap-mandatory scrollbar-hide"
    >
      {categories.map((category, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${category.image})` }}
          className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center
            justify-center text-white shrink-0 w-[90%] md:w-1/2 lg:w-full"
        >
          <Overlay className="inset-0 bg-black/30 rounded-[20px] snap-center justify-center items-center">
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: category.name.toLowerCase() },
                })
              }
            >
              {category.name}
            </Button>
          </Overlay>
        </div>
      ))}
    </section>
  );
}
