import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Link } from 'react-router-dom';

import { FaHourglassHalf,FaStar,FaCalendar } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { PiPopcornFill } from "react-icons/pi";



const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const IMG_URL = "https://image.tmdb.org/t/p/w500"


const InfoFilme = () => {

  const { id } = useParams()
  const [filme, setFilme] = useState(null)
  const [certification, setCertification] = useState("")
  const getRatingColor = (rating) => {
    if (rating === "L") return "bg-green-500"
    if (rating === "10") return "bg-blue-500"
    if (rating === "12") return "bg-yellow-500"
    if (rating === "14") return "bg-orange-500"
    if (rating === "16") return "bg-red-500"
    if (rating === "18") return "bg-black"

  return "bg-gray-500"
}

  const getFilme = async (url) => {
    const response = await axios.get(url)
    setFilme(response.data)
  }

  const getCertification = async (url) => {
  const response = await axios.get(url)

  const br = response.data.results.find(
    (item) => item.iso_3166_1 === "BR"
  )

  if (br) {
    setCertification(br.release_dates[0].certification)
  }
}

  useEffect(() => {
    const filmeUrl = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=pt-BR`
    const certUrl = `${BASE_URL}movie/${id}/release_dates?api_key=${API_KEY}`

    getFilme(filmeUrl)
    getCertification(certUrl)
  }, [id])

  return (
    <>
    <div id='navbar' className='text-white bg-neutral-900 flex h-16 justify-between items-center px-16!'>
       <Link to='/'><p className='text-3xl italic flex items-center hover:text-amber-400'><PiPopcornFill/>CineFlow</p></Link>
    </div>
    <div className="text-white flex flex-col mb-10!">
      
      {filme && (
        <>
         <div className="min-h-screen bg-cover bg-center relative" 
          style={{backgroundImage: filme?.backdrop_path ? `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`: "none" }}>
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className='flex justify-center mt-30! z-10 relative'>
              <img className='h-150 rounded-xl' src={IMG_URL + filme.poster_path} alt={filme.title}/>
            </div>
          </div>
          <div className='flex flex-col bg-neutral-900 rounded-xl p-10! mx-auto! mt-10! w-200 text-justify'>
            <p className='text-xl text-amber-400'>Classificação:</p>
            <div className={`w-10 text-center font-bold rounded ${getRatingColor(certification)}`}>
              {certification}
            </div> <br />

            <p className='text-xl text-amber-400 flex gap-2'><FaHourglassHalf /> Duração:</p>
            <p className='text-lg'>{filme.runtime} minutos</p><br />

            <p className='text-xl text-amber-400 flex gap-2'> <MdDescription/> Descrição:</p>
            <p className='text-lg'>{filme.overview}</p> <br />

            <p className='text-xl text-amber-400 flex gap-2'> <FaStar/> Avaliação:</p>
            <p className='text-lg'>{filme.vote_average.toFixed(2)}</p> <br />

            <p className='text-xl text-amber-400 flex gap-2'><FaCalendar /> Data de Lançamento:</p>
            <p className='text-lg'>{new Date(filme.release_date).toLocaleDateString("pt-BR")}</p>
          </div>
        </>
      )}
    </div>
    </>
  )
}

export default InfoFilme