import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router-tree-gen";
import { CartProvider } from "./contexts/CartProvider";

/**
 * CONFIGURAÇÃO DO ROUTER (App.tsx)
 *
 * Este arquivo é o ponto de entrada do sistema de roteamento.
 * Ele configura o router e o fornece para toda a aplicação.
 */

// createRouter() cria uma instância do router com base na árvore de rotas
// routeTree é gerado automaticamente pelo plugin @tanstack/router-plugin
// ele analisa os arquivos na pasta /src/pages e cria a estrutura de rotas
const router = createRouter({ routeTree });

/**
 * TypeScript: Registra o tipo do router
 * Isso permite que o TypeScript conheça o tipo do router em toda a aplicação
 * Útil para obter autocomplete e verificação de tipos
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * Componente App
 *
 * <RouterProvider /> fornece o router para toda a árvore de componentes React
 * Ele permite que componentes acessem o router e façam navegação
 */
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
