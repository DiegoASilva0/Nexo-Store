import { useState } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import produtos from "../data/products";
import formatPrice from "../utils/formatPrice";

function ProductDetails({ aoAdicionar }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [adicionado, setAdicionado] = useState(false);

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <main className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Produto não encontrado</h1>
        <p className="mt-2 text-slate-600">Confira o endereço ou volte para a loja.</p>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Voltar à loja
        </Link>
      </main>
    );
  }

  function adicionar() {
    aoAdicionar(produto);
    setAdicionado(true);
  }

  function comprarAgora() {
    aoAdicionar(produto);
    navigate("/checkout");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-700"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Voltar aos produtos
      </Link>

      <section className="mt-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-2">
        <div className="flex min-h-80 items-center justify-center bg-stone-100 p-6 sm:min-h-[28rem]">
          <img
            src={produto.image}
            alt={produto.alt || produto.name}
            className="max-h-[26rem] w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
            Nexo Store
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {produto.name}
          </h1>

          <div className="mt-5">
            {produto.oldPrice > produto.price && (
              <p className="text-sm text-slate-400 line-through">
                {formatPrice(produto.oldPrice)}
              </p>
            )}
            <p className="text-3xl font-bold text-slate-900">
              {formatPrice(produto.price)}
            </p>
          </div>

          <p className="mt-6 leading-7 text-slate-600">{produto.descricao}</p>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={adicionar}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 font-semibold text-white transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <ShoppingCart size={19} aria-hidden="true" />
              {adicionado ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
            </button>
            <button
              type="button"
              onClick={comprarAgora}
              className="rounded-xl border border-slate-300 px-5 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-stone-50"
            >
              Comprar agora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;