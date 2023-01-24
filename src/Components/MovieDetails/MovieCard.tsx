import React from 'react'
import { Link } from 'react-router-dom'
import { MovieDetails, MovieLink } from './style'

function MovieCard({details}: {details: any}) {

    const urlArray = details.url.split('/').filter(Boolean)
    const movieId = urlArray[urlArray.length - 1]

    return (
        <MovieDetails>
            <MovieLink style={{fontWeight: '800', cursor: 'pointer'}}>
                <Link
                    to={`/${movieId}`}
                >
                    {details.title}
                </Link>
            </MovieLink>
            <div style={{display: 'flex', placeContent: 'center', gap:'1rem'}}>
                <div style={{display: 'grid', justifyItems: 'start', alignItems: 'center', fontSize: '12px'}}>
                    <label style={{fontSize: '12px'}}>Director</label>
                    <label style={{fontSize: '12px'}}>Producer</label>
                </div>
                <div style={{display: 'grid', justifyItems: 'start', gap:'6px', alignItems: 'start', textAlign: 'left'}}>
                    <span>{details.director}</span>
                    <span>{details.producer}</span>
                </div>
            </div>
        </MovieDetails>
    )
}

export default MovieCard
