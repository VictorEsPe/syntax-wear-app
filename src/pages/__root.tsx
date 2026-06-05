import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

/**
 * ARQUIVO RAIZ (__root.tsx)
 *
 * Este é o componente raiz de todas as rotas.
 * Todas as outras rotas serão filhas desta rota raiz.
 * É como o wrapper principal da aplicação.
 */

// createRootRoute() cria a rota raiz que encapsula toda a estrutura de roteamento
export const Route = createRootRoute({
  // O 'component' é o componente React que será renderizado para esta rota
  component: RootComponent,
});

/**
 * Componente RootComponent
 *
 * Este componente renderiza apenas um <Outlet />
 * O <Outlet /> é um espaço onde as rotas filhas serão renderizadas
 * Pense nele como um "buraco" onde o conteúdo das páginas será inserido
 */
function RootComponent() {
  return (
    <React.Fragment>
      {/* <Outlet /> renderiza aqui o conteúdo da rota filha ativa */}
      <Outlet />
    </React.Fragment>
  );
}
