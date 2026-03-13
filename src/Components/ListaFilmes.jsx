import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardFilmes from './CardFilmes'
import { Link } from 'react-router-dom';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ListaFilmes = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    const [filmes, setFilmes] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        getFilmes("top_rated")
    }, [pagina])

    const getFilmes = (tipo) => {
        axios({
            method: 'get',
            url: `${BASE_URL}/movie/${tipo}`,
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
                page: pagina
            }
        }).then(response => {
            setFilmes(response.data.results)
        })
    }
    

  return (
    <div>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-auto! gap-4 mt-10! px-10! w-full mb-10!'>
            {filmes.map((filme) =>
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
        <div className="flex gap-4 justify-center mt-6 text-white">
            <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1} className="bg-neutral-700 text-white px-4! py-2! rounded cursor-pointer">
                <FaArrowAltCircleLeft/>
            </button>

            <span>Página {pagina}</span>

            <button onClick={() => setPagina(pagina + 1)} className="bg-neutral-700 text-white px-4! py-2! rounded cursor-pointer">
                <FaArrowAltCircleRight />
            </button>
        </div>
    </div>
  )
}

export default ListaFilmes