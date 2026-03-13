import React from 'react'
import Navbar from '../Components/Navbar'
import {useState, useEffect} from "react"
import { useSearchParams, Link } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import CardFilmes from '../Components/CardFilmes'
import axios from 'axios'

const searchUrl = "https://api.themoviedb.org/3/search/movie"
const API_KEY = import.meta.env.VITE_API_KEY


const Search = () => {

  const [searchParams] = useSearchParams()

  const [filmes, setFilmes] = useState([])
  const query = searchParams.get("q")  
  const [pagina, setPagina] = useState(1)
  

  const getSearchFilmes = async (url) => {
      const res = await axios.get(url);
      setFilmes(res.data.results);
    }

  useEffect(() => {
      const searchQueryUrl = `${searchUrl}?api_key=${API_KEY}&query=${query}&language=pt-BR&page=${pagina}`

      getSearchFilmes(searchQueryUrl)
    }, [query, pagina])
  
  return (
    <div className='text-white'>
      <Navbar />
      <div>
        <p className='text-3xl text-center mt-10!'>Resultados para: <span className='text-amber-400'>{query}</span></p>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-auto! gap-4 mt-10! px-10! w-full mb-10!'>
            {filmes.length > 0 &&
            filmes.map((filme) =>
                <Link to={`/filme/${filme.id}`}>
                <CardFilmes
                key={filme.id}
                title={filme.title}
                poster_path={filme.poster_path} 
                vote_average={filme.vote_average}
                />
                </Link>
            )}
        </ul>
        <div className="flex gap-4 justify-center mt-6 mb-10! text-white">
            <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1} className="bg-neutral-700 text-white px-4! py-2! rounded cursor-pointer">
              <FaArrowAltCircleLeft/>
            </button>
        
            <span>Página {pagina}</span>
        
            <button onClick={() => setPagina(pagina + 1)} className="bg-neutral-700 text-white px-4! py-2! rounded cursor-pointer">
                <FaArrowAltCircleRight />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Search