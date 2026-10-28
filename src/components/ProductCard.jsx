import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import formatPrice from "../utils/formatPrice";

function ProductCard({ produto }) {
  return (
    <Link
      to={"/products/" + produto.id}
      className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <article>
        <div className="aspect-[4/3] overflow-hidden bg-white">
          <img
            className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-[1.03]"
            src={produto.image}
            alt={produto.alt}
            loading="lazy"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-slate-900">{produto.name}</h3>
          <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
            {produto.descricao}
          </p>

          <div className="mt-4">
            {produto.oldPrice > produto.price && (
              <p className="text-sm text-slate-400 line-through">
                {formatPrice(produto.oldPrice)}
              </p>
            )}
            <p className="text-2xl font-bold text-slate-900">
              {formatPrice(produto.price)}
            </p>
          </div>

          <span className="mt-5 flex items-center justify-between rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-amber-600">
            Ver produto
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;