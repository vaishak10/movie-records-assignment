import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../../api'

function MovieList() {
    const {id} = useParams();
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [species, setSpecies] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])

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
        <div style={{marginTop: '100px', padding: '25px'}}>
            <h1>Movie id: {id}</h1>
        </div>
    )
}

export default MovieList