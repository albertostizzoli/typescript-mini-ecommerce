import axios from "axios";

// definisco il tipo Product
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

// funzione asincrona per ottenere i prodotti dall'API
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products",
    );
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero dei prodotti:", error);
    return [];
  }
}
