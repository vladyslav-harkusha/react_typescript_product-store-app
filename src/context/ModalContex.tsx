import React, { createContext, useState } from "react";

interface IModalContext {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => setIsModal(true);

  const closeModal = () => setIsModal(false);

  return (
    <ModalContext.Provider value={{ isModal, openModal, closeModal }}>
      { children }
    </ModalContext.Provider>
  );
};