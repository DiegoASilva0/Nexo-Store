import { useState } from "react";
import { ArrowLeft, CheckCircle2, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import formatPrice from "../utils/formatPrice";

function Checkout({ carrinho }) {
  const [finalizado, setFinalizado] = useState(false);
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    pagamento: "pix",
  });

  const total = carrinho.reduce(
    (soma, produto) => soma + produto.price * produto.quantidade,
    0
  );

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setFormulario((atual) => ({ ...atual, [name]: value }));
  }

  function confirmarPedido(event) {
    event.preventDefault();
    setFinalizado(true);
  }

  if (carrinho.length === 0) {
    return (
      <main className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <ShoppingBag size={46} className="text-amber-600" aria-hidden="true" />
        <h1 className="mt-5 text-2xl font-bold text-slate-900">Seu carrinho está vazio</h1>
        <p className="mt-2 text-slate-600">Adicione produtos antes de finalizar o pedido.</p>
        <Link
          to="/#produtos"
          className="mt-6 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          Ver produtos
        </Link>
      </main>
    );
  }

  if (finalizado) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12 text-center">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <CheckCircle2 size={54} className="mx-auto text-emerald-600" aria-hidden="true" />
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Pedido confirmado</h1>
          <p className="mt-3 text-slate-600">
            Obrigado, {formulario.nome.split(" ")[0]}! Esta compra é uma simulação.
          </p>
          <p className="mt-5 text-xl font-bold text-slate-900">
            Total: {formatPrice(total)}
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <ShoppingBag size={18} aria-hidden="true" />
            Voltar à loja
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/cart"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-700"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Voltar ao carrinho
      </Link>

      <h1 className="mt-5 text-3xl font-bold text-slate-900">Finalizar pedido</h1>
      <p className="mt-2 text-slate-600">Preencha seus dados para concluir a simulação.</p>

      <form onSubmit={confirmarPedido} className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <MapPin size={20} className="text-amber-600" aria-hidden="true" />
              Dados de entrega
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nome" className="mb-1 block text-sm font-medium text-slate-700">Nome completo</label>
                <input id="nome" name="nome" value={formulario.nome} onChange={atualizarCampo} required autoComplete="name" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">E-mail</label>
                <input id="email" name="email" type="email" value={formulario.email} onChange={atualizarCampo} required autoComplete="email" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="telefone" className="mb-1 block text-sm font-medium text-slate-700">Telefone</label>
                <input id="telefone" name="telefone" type="tel" value={formulario.telefone} onChange={atualizarCampo} required autoComplete="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="cep" className="mb-1 block text-sm font-medium text-slate-700">CEP</label>
                <input id="cep" name="cep" value={formulario.cep} onChange={atualizarCampo} required autoComplete="postal-code" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="numero" className="mb-1 block text-sm font-medium text-slate-700">Número</label>
                <input id="numero" name="numero" value={formulario.numero} onChange={atualizarCampo} required className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="endereco" className="mb-1 block text-sm font-medium text-slate-700">Endereço</label>
                <input id="endereco" name="endereco" value={formulario.endereco} onChange={atualizarCampo} required autoComplete="street-address" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="complemento" className="mb-1 block text-sm font-medium text-slate-700">Complemento (opcional)</label>
                <input id="complemento" name="complemento" value={formulario.complemento} onChange={atualizarCampo} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold text-slate-900">Forma de pagamento</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { value: "pix", label: "Pix" },
                { value: "cartao", label: "Cartão" },
                { value: "boleto", label: "Boleto" },
              ].map((opcao) => (
                <label
                  key={opcao.value}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50"
                >
                  <input
                    type="radio"
                    name="pagamento"
                    value={opcao.value}
                    checked={formulario.pagamento === opcao.value}
                    onChange={atualizarCampo}
                    className="accent-amber-600"
                  />
                  {opcao.label}
                </label>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              A forma de pagamento é apenas demonstrativa. Nenhum valor será cobrado.
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">Resumo do pedido</h2>
          <div className="mt-4 space-y-4">
            {carrinho.map((produto) => (
              <div key={produto.id} className="flex justify-between gap-4 text-sm">
                <span className="text-slate-600">
                  {produto.name} <span className="text-slate-400">× {produto.quantidade}</span>
                </span>
                <span className="font-medium text-slate-900">
                  {formatPrice(produto.price * produto.quantidade)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-amber-500 px-5 py-3.5 font-semibold text-white transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Confirmar pedido
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            Compra simulada para demonstração.
          </p>
        </aside>
      </form>
    </main>
  );
}

export default Checkout;