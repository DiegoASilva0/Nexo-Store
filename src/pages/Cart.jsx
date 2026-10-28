import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import CartItem from "../components/CartItem";
import formatPrice from "../utils/formatPrice";

function Cart({ carrinho, onUpdateQuantity, onRemoveItem }) {
  const total = carrinho.reduce(
    (soma, produto) => soma + produto.price * produto.quantidade,
    0
  );

  if (carrinho.length === 0) {
    return (
      <main className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <ShoppingBag size={46} className="text-amber-600" aria-hidden="true" />
        <h1 className="mt-5 text-2xl font-bold text-slate-900">Seu carrinho está vazio</h1>
        <p className="mt-2 text-slate-600">Escolha alguns produtos para continuar.</p>
        <Link
          to="/#produtos"
          className="mt-6 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          Ver produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/#produtos"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-700"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Continuar comprando
      </Link>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
            Sua sacola
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Carrinho</h1>
        </div>
        <p className="text-sm text-slate-500">
          {carrinho.length} {carrinho.length === 1 ? "produto" : "produtos"}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <section className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-6">
          {carrinho.map((produto) => (
            <CartItem
              key={produto.id}
              produto={produto}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </section>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Resumo do pedido</h2>
          <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">Frete calculado na próxima etapa.</p>
          <Link
            to="/checkout"
            className="mt-6 block rounded-xl bg-amber-500 px-5 py-3.5 text-center font-semibold text-white transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Continuar para entrega
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;