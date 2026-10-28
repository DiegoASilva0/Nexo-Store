import camiseta from "../assets/imagens/camiseta.jpg";
import calca from "../assets/imagens/calca-jeans.jpg";
import blusa from "../assets/imagens/blusa-frente.jpg";

const produtos = [
  {
    id: 1,
    name: "Camiseta",
    price: 29.99,
    oldPrice: 50,
    descricao:
      "Camiseta azul-marinho de manga curta e gola redonda. Um modelo básico e versátil, fácil de combinar no dia a dia.",
    image: camiseta,
    alt: "Camiseta azul-marinho de manga curta",
  },
  {
    id: 2,
    name: "Calça jeans",
    price: 59.99,
    oldPrice: 80,
    descricao:
      "Calça jeans azul-escura de corte reto, com bolsos frontais e traseiros. Uma peça clássica para looks casuais.",
    image: calca,
    alt: "Calça jeans azul-escura de corte reto",
  },
  {
    id: 3,
    name: "Blusa",
    price: 49.99,
    oldPrice: 70,
    descricao:
      "Blusa terracota de manga longa, com gola redonda e acabamento canelado nos punhos e na barra.",
    image: blusa,
    alt: "Blusa terracota de manga longa",
  },
];

export default produtos;