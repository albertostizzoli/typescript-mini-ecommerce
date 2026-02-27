import { Product } from "./App";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  onAdd: () => void;
};

export default function ProductList({ products, onAdd }: Props) {
  return (
    <div className="space-y-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
