import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="Nexo Store, início"
          >
          <span className="text-xl font-bold text-white">
              Nexo <span className="text-amber-400">Store</span>
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
            Roupas versáteis para acompanhar você no dia a dia.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="mb-4 text-base font-bold text-white">Navegação</h2>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="transition hover:text-amber-400">Início</Link></li>
            <li><Link to="/#produtos" className="transition hover:text-amber-400">Produtos</Link></li>
            <li><Link to="/cart" className="transition hover:text-amber-400">Carrinho</Link></li>
            <li><Link to="/checkout" className="transition hover:text-amber-400">Finalizar pedido</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-base font-bold text-white">Sobre a loja</h2>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Catálogo de produtos demonstrativo</li>
            <li>Checkout fictício para portfólio</li>
            <li>Nenhum pagamento é processado</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-base font-bold text-white">
            Pagamento na demonstração
          </h2>

          <div className="flex flex-wrap gap-2">
            {["Pix", "Cartão", "Boleto"].map((forma) => (
              <span
                key={forma}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-200"
              >
                {forma}
              </span>
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            As opções aparecem apenas para demonstrar o fluxo de compra.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Nexo Store</p>
          <p>Projeto de portfólio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;