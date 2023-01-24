import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../../api'
import { Card } from './style'

function MovieList() {
    const {id} = useParams();
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [species, setSpecies] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])

    const [movieName, setMovieName] = useState('')
    const [movieDirector, setMovieDirector] = useState('')
    const [movieProducer, setMovieProducer] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    console.log(characters)
    console.log(planets)
    console.log(species)
    console.log(starships)
    console.log(vehicles)

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
                        setPlanets(response.planets)
                        setSpecies(response.species)
                        setStarships(response.starships)
                        setVehicles(response.vehicles)
                    } catch(err) {
                        console.log(err)
                    }
                }
            )()
        }
    },[id])

    return (
        movieName ? (
            <div style={{marginTop: '100px', padding: '25px', display: 'flex', placeContent: 'center'}}>
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
            </div>
        ) : (
            <h2 style={{color: '#000'}}>Loading....</h2>
        )
    )
}

export default MovieList