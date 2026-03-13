import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { PiPopcornFill } from "react-icons/pi";

const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`) 
    setSearch("")

  }

  return (
    <div id='navbar' className='text-white bg-neutral-900 flex h-16 justify-between items-center px-16!'>
        <Link to='/'><p className='text-3xl italic flex items-center hover:text-amber-400'><PiPopcornFill/> CineFlow</p></Link>
        <form onSubmit={handleSubmit}>
          <input className='bg-neutral-950 h-8 w-120 rounded-md outline-0 p-2!' type="text" placeholder='Buscar' onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button className='ml-2! cursor-pointer'><FaSearch /></button>
        </form>
    </div>
  )
}

export default Navbar