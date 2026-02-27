import ProductCard from "components/ProductCard";
import { Product } from "../../types/entities";

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
