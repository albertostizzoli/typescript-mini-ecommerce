import type { Product } from "../types/entities"; // importo il type Product da entities

// definisco il type Props per le props del componente
type Props = {
  product: Product; // la prop product è del type Product
  addCart: () => void; // la prop addCart è una funzione che non riceve argomenti e non restituisce nulla
};

function ProductCard({ product, addCart }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-500">€ {product.price}</p>
      </div>

      <button
        onClick={addCart}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
      >
        Aggiungi
      </button>
    </div>
  );
}

export default ProductCard;
