import { FC } from 'react'

export const CreateProduct: FC = () => {
  return (
      <form>
        <input
          type="text"
          className='border py-2 px-4 mb-2 w-full outline-0'
          placeholder='Enter product title'
        />

        <button type='submit' className='py-2 px-4 border bg-teal-600 hover:bg-teal-300'>Create</button>
      </form>
  )
}
