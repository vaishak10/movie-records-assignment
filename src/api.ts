export const fetchMovies = async () => {
    const response = await fetch('https://swapi.dev/api/films/', {
        method: 'get',
        headers: {
            'content-type': 'text/csv;charset=UTF-8'
        }
    })

    return response.json()
}

export const fetchMovieDetails = async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/films/${id}`, {
        method: 'get',
        headers: {
            'content-type': 'text/csv;charset=UTF-8'
        }
    })
    return response.json()
}