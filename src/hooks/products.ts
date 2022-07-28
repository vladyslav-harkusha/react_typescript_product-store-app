import axios, { AxiosError } from "axios";
import { IProduct } from "../models";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product]);
  };

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct }
};