import React from 'react'
import mrplogo from '../assets/mrp-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
  return (
    <nav className='fixed w-full flex py-3 justify-center align-center space-x-60 bg-ionGray z-10'>
        <img src={mrplogo} alt="" className='w-500' />

        {/* Searchbar */}
        <div className='bg-white flex align-center space-x-10'>

          <div className='flex'>
            <FontAwesomeIcon icon={faSearch} className="align-center" />
            <input
              type="search"
              placeholder="Search Items, Brands & Categories"
              className='w-full p-3 outline-none'  
            />
          </div>

          <div className='flex'>
            <FontAwesomeIcon icon={faCamera} />
            <p>Search By Image</p>
          </div>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faUser} />
          <p>Sign In / Register</p>
          |
          <FontAwesomeIcon icon={faCartShopping} />

        </div>


      </nav>
  )
}

export default TopNav