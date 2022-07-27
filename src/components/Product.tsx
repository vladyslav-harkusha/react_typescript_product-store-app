import React, { FC, useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-emerald-200' : 'bg-emerald-400';
  const btnClasses = ['py-1 px-2 border border-emerald-700 rounded', btnBgClassName];

  return (
    <div className="border-2 border-emerald-700 py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      
      <p>{product.title}</p>

      <p className="font-bold">{`${product.price} $`}</p>

      <button 
        className={btnClasses.join(' ')}
        onClick={() => setDetails(!details)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>
      {details &&
        <div>
          <p className="border border-emerald-200 px-2 py-1 mt-3">{product.description}</p>
          <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
        </div>
      }
    </div>
  )
}
