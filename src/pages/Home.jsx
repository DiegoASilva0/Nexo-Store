import { ArrowDown } from "lucide-react";
import CategoryList from "../components/CategoryList";

function Home() {
  return (
    <>
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
              Nexo Store · coleção casual
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Peças essenciais para acompanhar o seu dia.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Encontre roupas versáteis, confortáveis e fáceis de combinar.
            </p>
            <a
              href="#produtos"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Explorar produtos
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <CategoryList />
      </main>
    </>
  );
}

export default Home;