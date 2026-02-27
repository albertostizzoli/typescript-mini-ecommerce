import axios from "axios";

// Tipi
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

// Chiamata API

export const callProducts = axios
  .get("https://fakestoreapi.com/products")
  .then((response) => console.log(response.data));
