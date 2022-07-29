import { FC, useContext } from "react";
import { useProducts } from "../hooks/products";
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContex";

export const ProductPage: FC = () => {
  const { products, error, loading, addProduct } = useProducts();

  const { isModal, openModal, closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className="container mx-auto mt-20 max-w-2xl">
      <button
        className="rounded-full fixed ml-5 top-[70px] bg-emerald-800 p-2 text-emerald-200"
        onClick={() => openModal()}
      >
        + New Product
      </button>

      {loading && <Loader />}

      {error && <ErrorMessage error={error} />}

      {products.map(product => <Product key={product.id} product={product} />)}

      {isModal &&
        <Modal title='Create new product' onClose={() => closeModal()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
    </div>
  );
};
