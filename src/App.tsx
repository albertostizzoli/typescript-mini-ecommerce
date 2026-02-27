import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductList";
import type { Product } from "./types/entities"; // importo il type Product da entities
import { getProducts } from "./types/entities"; // importo la funzione per la chiamata API

function App() {
  const [cartCount, setCartCount] = useState(0); // stato per aggiornare la pagina
  const [products, setProducts] = useState<Product[]>([]); // stato per salvare i prodotti

  // carico i prodotti all'avvio
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartCount} />

      {/* Contenitore principale */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductList
          products={products}
          addCart={() => setCartCount(cartCount + 1)}
        />
      </div>
    </div>
  );
}

export default App;
