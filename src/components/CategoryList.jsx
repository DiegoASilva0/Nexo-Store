import ProductCard from "./ProductCard";
import produtos from "../data/products";

function CategoryList() {
  return (
    <section id="produtos" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
          Nossa seleção
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Peças em destaque
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default CategoryList;