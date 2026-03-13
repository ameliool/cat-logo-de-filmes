import { Outlet } from 'react-router-dom'
import './App.css'
import ListaFilmes from './Components/ListaFilmes'

import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='mb-10!'>
      <Navbar />
      <h1 className='text-white text-4xl text-center mt-10! italic'>Filmes Mais Bem Avaliados</h1>
      <ListaFilmes />
   </div>
  )
}

export default App
