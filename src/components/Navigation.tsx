import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-teal-600 items-center text-teal-200'>
      <span className='font-bold'>React-Typescript 2022</span>

      <span>
        <Link to="/" className='mr-4'>Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}
