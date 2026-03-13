import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

    console.log(error)

  return (
    <div className='flex flex-col justify-center h-screen items-center text-white'>
        <h1 className=' text-4xl'>Ops!!</h1>
        <p className=' text-2xl'>Tivemos um problema...</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage