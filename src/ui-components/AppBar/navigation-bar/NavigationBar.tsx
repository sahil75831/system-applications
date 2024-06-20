import { NavigationMenuDemo } from '@/shad-components/navigation-menu'
import React from 'react'
import SearchBar from '../search-bar/SearchBar'

const NavigationBar = () => {
  return (
    <div className='border rounded-full shadow-md px-4 py-2 flex items-start gap-20'>
      <NavigationMenuDemo />
      <SearchBar />
    </div>
  )
}

export default NavigationBar