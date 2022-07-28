import axios from 'axios';
import React, { FC, useState } from 'react';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
  id: 355,
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  }
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct: FC<CreateProductProps> = ({ onCreate }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter a valid title');
      
      return
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
  
    onCreate(response.data);
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          className='border py-2 px-4 mb-2 w-full outline-0'
          placeholder='Enter product title'
        />

        {error && <ErrorMessage error={error} />}

        <button type='submit' className='py-2 px-4 border bg-teal-600 hover:bg-teal-300'>Create</button>
      </form>
  )
}
