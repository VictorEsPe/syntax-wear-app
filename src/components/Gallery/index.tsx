import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import styles from "./Gallery.module.css";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  className: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "highlight",
    src: galeriaHomem,
    alt: "Modelo masculino usando tênis SyntaxWear",
    className: styles.highlight,
  },
  {
    id: "sneaker-white",
    src: galeriaTenisBrancoEPreto,
    alt: "Tênis preto e branco SyntaxWear",
    className: styles.sneakerWhite,
  },
  {
    id: "model",
    src: galeriaModelo,
    alt: "Modelo feminina usando tênis SyntaxWear",
    className: styles.model,
  },
  {
    id: "sneaker-color",
    src: galeriaTenisColorido,
    alt: "Tênis colorido SyntaxWear",
    className: styles.sneakerColor,
  },
  {
    id: "sneaker-silver",
    src: galeriaTenisCinza,
    alt: "Tênis cinza SyntaxWear",
    className: styles.sneakerSilver,
  },
  {
    id: "sneaker-purple",
    src: galeriaTenisRoxo,
    alt: "Tênis roxo SyntaxWear",
    className: styles.sneakerPurple,
  },
];

export function Gallery() {
  return (
    <div className="container">
      <section className="w-full">
        <div className={styles.gallery}>
          {galleryItems.map((item) => (
            <div 
           
            key={item.id} className={`${styles.item} ${item.className}`}>
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
