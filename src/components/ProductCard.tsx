import { Product } from "./App";

type Props = {
  product: Product;
  onAdd: () => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-500">€ {product.price}</p>
      </div>

      <button
        onClick={onAdd}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
      >
        Aggiungi
      </button>
    </div>
  );
}
