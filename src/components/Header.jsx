import { Link } from "react-router";

function Header({ quantidadeCarrinho = 0 }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Nexo Store, início"
        >

          <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Nexo <span className="text-amber-600">Store</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="w-full sm:w-auto">
          <ul className="flex items-center justify-between gap-1 text-sm font-medium sm:justify-end sm:gap-4">
            <li>
              <Link
                to="/"
                className="inline-flex min-h-10 items-center rounded-lg px-2 text-slate-600 transition hover:text-amber-700 sm:px-3"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                to="/#produtos"
                className="inline-flex min-h-10 items-center rounded-lg px-2 text-slate-600 transition hover:text-amber-700 sm:px-3"
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                aria-label={
                  "Carrinho com " +
                  quantidadeCarrinho +
                  (quantidadeCarrinho === 1 ? " item" : " itens")
                }
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-900 px-3 text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:gap-2 sm:px-4"
              >
                Carrinho
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-bold text-white">
                  {quantidadeCarrinho}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;