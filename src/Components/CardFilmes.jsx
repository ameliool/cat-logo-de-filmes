import React from 'react'

const CardFilmes = (props) => {


  return (
    <div>
        <li key={props.id} className='text-white'>
                <div className=''>
                    <img className='w-full h-full bg-cover rounded-md hover:opacity-50 transition-all duration-300' src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    <p className='text-xl'>{props.title}</p>
                    <p className='text-blue-300'>{props.overview}</p>
                    <p className='text-yellow-200'>⭐{props.vote_average.toFixed(2)}</p>
                </div>
                <div>
                    {/* <button className='cursor-pointer'>Ver mais</button> */}
                </div>
        </li>
    </div>
  )
}

export default CardFilmes