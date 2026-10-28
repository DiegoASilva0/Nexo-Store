import { Minus, Plus, Trash2 } from "lucide-react";
import formatPrice from "../utils/formatPrice";

function CartItem({ produto, onUpdateQuantity, onRemoveItem }) {
  return (
    <article className="flex flex-col gap-4 border-b border-slate-200 py-5 sm:flex-row sm:items-center">
      <img
        src={produto.image}
        alt={produto.alt || produto.name}
        className="h-24 w-24 rounded-xl bg-stone-100 object-contain p-2"
      />

      <div className="min-w-0 flex-1">
        <h2 className="font-semibold text-slate-900">{produto.name}</h2>
        <p className="mt-1 text-sm text-slate-500">
          {formatPrice(produto.price)} cada
        </p>
      </div>

      <div className="flex items-center justify-between gap-5 sm:justify-end">
        <div className="flex items-center rounded-lg border border-slate-200">
          <button
            type="button"
            aria-label={"Diminuir quantidade de " + produto.name}
            disabled={produto.quantidade <= 1}
            onClick={() => onUpdateQuantity(produto.id, -1)}
            className="rounded-l-lg p-2.5 text-slate-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={16} />
          </button>
          <span className="min-w-10 text-center text-sm font-semibold">
            {produto.quantidade}
          </span>
          <button
            type="button"
            aria-label={"Aumentar quantidade de " + produto.name}
            onClick={() => onUpdateQuantity(produto.id, 1)}
            className="rounded-r-lg p-2.5 text-slate-700 transition hover:bg-stone-100"
          >
            <Plus size={16} />
          </button>
        </div>

        <p className="min-w-24 text-right font-semibold text-slate-900">
          {formatPrice(produto.price * produto.quantidade)}
        </p>

        <button
          type="button"
          aria-label={"Remover " + produto.name + " do carrinho"}
          onClick={() => onRemoveItem(produto.id)}
          className="rounded-lg p-2.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </article>
  );
}

export default CartItem;