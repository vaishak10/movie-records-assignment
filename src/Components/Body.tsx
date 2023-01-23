import { useEffect, useState } from 'react'

import { BodyContainer, CardsContainer } from './style'
import MovieCard from './MovieDetails/MovieCard'

import { fetchMovies } from '../api'

function Body() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        (
            async() => {
                try {
                    const response = await fetchMovies()
                    console.log(response.results)
                    setMovies(response.results)
                } catch(err) {
                    console.log(err)
                }
            }
        )()
    },[])

    return (
        <BodyContainer>
            <CardsContainer>
                {
                    movies.length > 0 && movies.map((movie: any) => {
                        return <MovieCard key={movie.title} details={movie} />
                    })
                }
            </CardsContainer>
        </BodyContainer>
    )
}

export default Body