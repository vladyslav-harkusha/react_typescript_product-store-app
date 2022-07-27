import React from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

export function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
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
