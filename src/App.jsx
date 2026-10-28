import { useState } from "react";
import { Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === produto.id);

      if (itemExistente) {
        return itensAtuais.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...itensAtuais, { ...produto, quantidade: 1 }];
    });
  }

  function atualizarQuantidade(id, delta) {
    setCarrinho((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    );
  }

  function removerItem(id) {
    setCarrinho((itensAtuais) =>
      itensAtuais.filter((item) => item.id !== id)
    );
  }

  const quantidadeCarrinho = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-slate-900">
      <Header quantidadeCarrinho={quantidadeCarrinho} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:id"
            element={<ProductDetails aoAdicionar={adicionarAoCarrinho} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                carrinho={carrinho}
                onUpdateQuantity={atualizarQuantidade}
                onRemoveItem={removerItem}
              />
            }
          />
          <Route path="/checkout" element={<Checkout carrinho={carrinho} />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;