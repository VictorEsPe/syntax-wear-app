import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import styles from "./Gallery.module.css";
import { Overlay } from "../Overlay";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  className: string;
  hasOverlay: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "highlight",
    src: galeriaHomem,
    alt: "Modelo masculino usando tênis SyntaxWear",
    className: styles.highlight,
    hasOverlay: true,
  },
  {
    id: "sneaker-white",
    src: galeriaTenisBrancoEPreto,
    alt: "Tênis preto e branco SyntaxWear",
    className: styles.sneakerWhite,
    hasOverlay: false,
  },
  {
    id: "model",
    src: galeriaModelo,
    alt: "Modelo feminina usando tênis SyntaxWear",
    className: styles.model,
    hasOverlay: false,
  },
  {
    id: "sneaker-color",
    src: galeriaTenisColorido,
    alt: "Tênis colorido SyntaxWear",
    className: styles.sneakerColor,
    hasOverlay: false,
  },
  {
    id: "sneaker-silver",
    src: galeriaTenisCinza,
    alt: "Tênis cinza SyntaxWear",
    className: styles.sneakerSilver,
    hasOverlay: false,
  },
  {
    id: "sneaker-purple",
    src: galeriaTenisRoxo,
    alt: "Tênis roxo SyntaxWear",
    className: styles.sneakerPurple,
    hasOverlay: false,
  },
];

export function Gallery() {
  const router = useRouter();

  return (
    <div className="container">
      <section className="w-full">
        <div className={styles.gallery}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${item.className} relative`}
            >
              {item.hasOverlay && (
                <Overlay
                  title="Krypton One"
                  subtitle="Estilo urbano com atitude"
                  className="inset-0 justify-center"
                >
                  <Button
                    variant="secondary"
                    onClick={() =>
                      router.navigate({
                        to: "/products/category/$category",
                        params: { category: "feminino" },
                      })
                    }
                  >
                    Feminino
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      router.navigate({
                        to: "/products/category/$category",
                        params: { category: "masculino" },
                      })
                    }
                  >
                    Masculino
                  </Button>
                </Overlay>
              )}
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
