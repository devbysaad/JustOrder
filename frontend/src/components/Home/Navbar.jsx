import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold text-gray-800">
          JustOrder
        </Link>

        <div className="flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          {/* <Link to="/profile" className="hover:text-blue-600 transition">
            Profile
          </Link> */}
          <Link to="/create-product" className="hover:text-blue-600 transition">
            Create
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
