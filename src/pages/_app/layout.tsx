import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/footer";

/**
 * ARQUIVO DE LAYOUT (_app/layout.tsx)
 *
 * Este arquivo representa uma rota do tipo 'layout'.
 * A pasta _app é uma convenção do TanStack Router para indicar um grupo de rotas.
 * Este layout será usado por todas as rotas filhas dentro de _app/
 *
 * Estrutura de rotas:
 * __root.tsx (raiz)
 *   └── _app/layout.tsx (layout compartilhado)
 *       ├── _app/index.tsx (página home)
 *       └── _app/products/index.tsx (página de produtos)
 */

// createFileRoute() cria uma rota com base no caminho do arquivo
// "/_app" significa que esta é a rota para /_app
export const Route = createFileRoute("/_app")({
  // O componente que será renderizado para esta rota
  component: AppLayout,
});

/**
 * Componente AppLayout
 *
 * Este componente funciona como um wrapper para todas as rotas filhas.
 * Ele renderiza:
 * 1. <Header /> - sempre renderizado no topo
 * 2. <Outlet /> - espaço onde as rotas filhas serão renderizadas
 * 3. <Footer /> - sempre renderizado no rodapé
 */
function AppLayout() {
  return (
    <div>
      {/* Header aparece em todas as páginas filhas */}
      <Header />

      {/* <Outlet /> renderiza aqui o conteúdo da rota filha ativa (index ou products) */}
      <Outlet />

      {/* Footer aparece em todas as páginas filhas */}
      <Footer />
    </div>
  );
}
