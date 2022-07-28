import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { useProducts } from "./hooks/products";

export function App() {
  const { products, error, loading } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
  
      { error && <ErrorMessage error={error} /> }

      { products.map(product => <Product key={product.id} product={product} />) }
    </div>
  );
};




  // const [count, setCount] = useState(1);
  // return React.createElement('div', {className: 'container'}, [
  //   React.createElement('h1', { className: 'font-bold', key: 1}, `Test JSX count = ${count} `),
  //   React.createElement('button', {
  //     className: 'py-2 px-4 border bg-emerald-500',
  //     key: 2,
  //     onClick: () => setCount(count + 1)
  //   }, 'Click me!')
  // ]);
