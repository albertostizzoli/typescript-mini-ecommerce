import ProductCard from "../components/ProductCard";
import type { Product } from "../types/entities";

type Props = {
  products: Product[]; // la prop products è un array di oggetti del type Product
  addCart: () => void; // la prop addCart è una funzione che non riceve argomenti e non restituisce nulla
};

function ProductList({ products, addCart }: Props) {
  return (
    // mappo l'array di oggetti per ogni prodotto e passo come props l'oggetto product e la funzione addCart
    <div className="space-y-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addCart={addCart} />
      ))}
    </div>
  );
}

export default ProductList;
