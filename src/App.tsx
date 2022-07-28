import { useState } from "react";
import { useProducts } from "./hooks/products";
import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { IProduct } from "./models";

export function App() {
  const { products, error, loading, addProduct } = useProducts();
  const [isModal, setIsModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setIsModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto mt-20 max-w-2xl">
      <button 
        className="rounded-full fixed ml-5 top-5 bg-emerald-800 p-2 text-emerald-200"
        onClick={() => setIsModal(true)}
      >
        + New Product
      </button>

      { loading && <Loader /> }
  
      { error && <ErrorMessage error={error} /> }

      { products.map(product => <Product key={product.id} product={product} />) }

      { isModal &&
        <Modal title='Create new product' onClose={() => setIsModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
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
