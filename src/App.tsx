import { useState } from "react";
import ProductList from "./components/ProductList";
import type { Product } from "./types/entities"; // importo il type Product da entities

function App() {
  const [cartCount, setCartCount] = useState(0); // stato per aggiornare la pagina

  const products: Product[] = [
    // array di oggetti del type Product
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Mini E-Commerce</h1>

        <div className="bg-white p-4 rounded-xl shadow mb-6">
          Carrello: <span className="font-bold">{cartCount}</span>
        </div>
        {/* Prodcuct List è il componente padre che passa come props l'array di oggetti e la funzione per aggiornare il carrello */}
        <ProductList
          products={products}
          addCart={() => setCartCount(cartCount + 1)}
        />
      </div>
    </div>
  );
}

export default App;
