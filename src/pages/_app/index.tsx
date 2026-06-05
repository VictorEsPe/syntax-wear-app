import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../../components/Hero";
import { Categories } from "../../components/Categories";
import { Gallery } from "../../components/Gallery";

/**
 * PÁGINA HOME (_app/index.tsx)
 *
 * Este arquivo representa a rota HOME (página principal).
 * O arquivo index.tsx dentro de uma pasta representa a rota raiz dessa pasta.
 *
 * Estrutura:
 * - Quando acessa "/" (raiz), esta página é renderizada dentro do <Outlet /> do layout
 * - O layout _app/layout.tsx envolve este componente (Header + Outlet + Footer)
 */

// createFileRoute("/_app/") cria uma rota que fica em /_app/ ou apenas /
// (porque está dentro do layout de _app)
export const Route = createFileRoute("/_app/")({
  // O componente que será renderizado nesta rota
  component: RouteComponent,
});

/**
 * Componente RouteComponent (Página Home)
 *
 * Este é o conteúdo específico da página home.
 * Ele será renderizado no <Outlet /> do layout _app/layout.tsx
 * Portanto a estrutura final será:
 *
 * <Header />
 * <main>
 *   <Hero />
 *   <Categories />
 *   <Gallery />
 * </main>
 * <Footer />
 */
function RouteComponent() {
  return (
    <>
      <main className="py-10">
        {/* Componentes específicos da página home */}
        <Hero />
        <Categories />
        <Gallery />
      </main>
    </>
  );
}
