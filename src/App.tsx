import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./components/Product";
// import { products } from "./data/products";
import { IProduct } from "./models";

export function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
    setProducts(response.data);
  } 

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(product =>
        <Product key={product.id} product={product}/>
      )}
    </div>
  );

  // const [count, setCount] = useState(1);
  // return React.createElement('div', {className: 'container'}, [
  //   React.createElement('h1', { className: 'font-bold', key: 1}, `Test JSX count = ${count} `),
  //   React.createElement('button', {
  //     className: 'py-2 px-4 border bg-emerald-500',
  //     key: 2,
  //     onClick: () => setCount(count + 1)
  //   }, 'Click me!')
  // ]);
}
