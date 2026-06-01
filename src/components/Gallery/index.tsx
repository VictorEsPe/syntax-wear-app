import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  desktopClasses: string;
  defaultClasses: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "highlight",
    src: galeriaHomem,
    alt: "Modelo masculino usando tênis SyntaxWear",
    desktopClasses: "md:col-span-2 md:row-span-2 md:order-none",
    defaultClasses: "col-span-2 order-1",
  },
  {
    id: "sneaker-purple",
    src: galeriaTenisRoxo,
    alt: "Tênis roxo SyntaxWear",
    desktopClasses: "md:col-span-2 md:order-none",
    defaultClasses: "col-span-2 order-6",
  },
  {
    id: "model",
    src: galeriaModelo,
    alt: "Modelo feminina usando tênis SyntaxWear",
    desktopClasses: "md:col-span-1 md:row-span-2 md:order-none",
    defaultClasses: "col-span-1 row-span-2 order-3",
  },
  {
    id: "sneaker-color",
    src: galeriaTenisColorido,
    alt: "Tênis colorido SyntaxWear",
    desktopClasses: "md:col-span-1 md:order-none",
    defaultClasses: "col-span-1 order-4",
  },
  {
    id: "sneaker-white",
    src: galeriaTenisBrancoEPreto,
    alt: "Tênis preto e branco SyntaxWear",
    desktopClasses: "md:col-span-2 md:order-none",
    defaultClasses: "col-span-2 order-2",
  },
  {
    id: "sneaker-silver",
    src: galeriaTenisCinza,
    alt: "Tênis cinza SyntaxWear",
    desktopClasses: "md:col-span-1 md:order-none",
    defaultClasses: "col-span-1 order-5",
  },
];

export function Gallery() {
  return (
    <div className="container">
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7.5 rounded-[20px] overflow-hidden">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.desktopClasses} ${item.defaultClasses} overflow-hidden rounded-xl md:rounded-[20px]`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
