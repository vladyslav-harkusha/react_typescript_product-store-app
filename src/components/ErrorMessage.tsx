import { FC }from 'react'

interface ErrorProps {
  error: string;
}

export const ErrorMessage:FC<ErrorProps> = ({ error }) => {
  return (
    <p className="text-center text-red-600">{error}</p>
  )
};
