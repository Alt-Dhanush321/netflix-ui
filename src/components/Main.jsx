import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios'
import { mockComponent } from 'react-dom/test-utils'

function Main() {

    const [movies, setMovies] = useState([])

    const movie  = movies[Math.floor(Math.random() * movies.length )]

    

    useEffect(()=>{
        axios.get(request.reqPopular)
        .then((res)=>setMovies(res.data.results))
    },[])
    console.log(movie)
  return (
    <div className='main w-full h-[750px] text-red shadow-inner '>
        <div className="main w-full h-full ">
            <img className='object-cover w-full h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className=" absolute flex flex-col px-10 justify-start gap-7 w-full lg:w-2/3 top-[20%] lg:px-20">
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <p className='text-[#e2e2e2]'>Release date :{movie?.release_date}</p>

                <p>{movie?.overview}</p>
                <div className="buttons">
                    <button className=' border px-5 py-2 '>Play</button>
                    <button className='px-5 py-2 bg-[#e50914] ml-4 bg-red'>Watch Later</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Main