import type { Product } from "../types/entities"; // importo il type Product da entities

// definisco il type Props per le props del componente
type Props = {
  product: Product; // la prop product è del type Product
  addCart: () => void; // la prop addCart è una funzione che non riceve argomenti e non restituisce nulla
};

function ProductCard({ product, addCart }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col p-4">
      {/* Immagine */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain rounded-lg mb-4"
      />

      {/* Contenitore verticale principale */}
      <div className="flex flex-col flex-1 gap-2 text-center">
        {/* Titolo e categoria */}
        <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm">{product.category}</p>

        {/* Descrizione */}
        <p className="text-gray-700 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Spacer automatico per spingere prezzo/rating e bottone in basso */}
        <div className="flex flex-col flex-1 justify-end mt-2">
          <div className="flex justify-between items-center mb-3">
            <p className="font-bold text-blue-600 text-lg">€ {product.price}</p>
            <p className="text-yellow-500 text-sm flex items-center gap-1">
              ⭐ {product.rating.rate} ({product.rating.count})
            </p>
          </div>

          {/* Bottone sempre in fondo */}
          <button
            onClick={addCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Aggiungi al Carrello
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
