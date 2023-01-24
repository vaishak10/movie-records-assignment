import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { fetchMovieDetails } from '../../api'
import { Card } from './style'

function MovieList() {
    const {id} = useParams();
    const [characters, setCharacters] = useState([])
    const [movieName, setMovieName] = useState('')
    const [movieDirector, setMovieDirector] = useState('')
    const [movieProducer, setMovieProducer] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    console.log(characters)

    useEffect(() => {
        if(id !== undefined) {
            (
                async () => {
                    try {
                        const response = await fetchMovieDetails(id)
                        console.log(response)
                        setMovieDirector(response.director)
                        setMovieName(response.title)
                        setMovieProducer(response.producer)
                        setReleaseDate(response.release_date)
                        setCharacters(response.characters)
                    } catch(err) {
                        console.log(err)
                    }
                }
            )()
        }
    },[id])

    return (
        <div style={{marginTop: '100px', padding: '25px', display: 'flex', placeContent: 'center', gap: '16px'}}>
            {
                movieName && (
                    <>
                        <div style={{alignSelf: 'center', cursor:'pointer'}}>
                            <Link to={'/'}>
                                <ArrowCircleLeftIcon fontSize="large" color="action"/>
                            </Link>
                        </div>
                        <Card>
                            <h1 style={{marginTop: 0}}>{movieName}</h1>
                            <div style={{display: 'flex', placeContent: 'center', gap: '1rem'}}>
                                <div style={{display: 'grid', justifyItems: 'start', rowGap: '1rem', alignItems: 'center', fontSize: '12px'}}>
                                    <label>Release Date</label>
                                    <label>Director</label>
                                    <label>Producer</label>
                                </div>
                                <div style={{display: 'grid', rowGap: '1rem', justifyItems: 'start'}}>
                                    <strong>{releaseDate.split('-').reverse().join('-')}</strong>
                                    <strong>{movieDirector}</strong>
                                    <strong>{movieProducer}</strong> 
                                </div>
                            </div>
                        </Card>
                    </>
                )
            }
        </div>
    )
}

export default MovieList