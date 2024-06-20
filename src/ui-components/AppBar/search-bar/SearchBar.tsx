import { Input } from '@/components/ui/input'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <Input placeholder='seacrh...' className='rounded-full bg-gray-100 border-none w-64' />
    </div>
  )
}

export default SearchBar