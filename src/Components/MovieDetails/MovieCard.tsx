import React from 'react'
import { Link } from 'react-router-dom'
import { MovieDetails } from './style'

function MovieCard({details}: {details: any}) {

    const urlArray = details.url.split('/').filter(Boolean)
    const movieId = urlArray[urlArray.length - 1]

    return (
        <MovieDetails>
            <p style={{fontWeight: '800', cursor: 'pointer'}}>
                <Link
                    to={`/${movieId}`}
                >
                    {details.title}
                </Link>
            </p>
            <p><label>Director</label>: {details.director}</p>
            <p><label>Producer</label>: {details.producer}</p>
        </MovieDetails>
    )
}

export default MovieCard
