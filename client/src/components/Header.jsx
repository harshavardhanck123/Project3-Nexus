import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Header = () => {
  return (
    <div>
      <nav>
      <div className="flex space-x-4">
            <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-300 hover:text-black" aria-current="page">Home</Link>
            <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
          </div>
      </nav>
    </div>
  )
}

export default Header