import React from 'react'
import { useGlobalContext } from './context'
// import { Link } from 'react-router-dom'
import { LoadingDivTag, MovieAnchorTag, MoviesSectionTag, MovieInfoDivTag } from './MoviesStyles'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <LoadingDivTag></LoadingDivTag>
  }
  return (
    <MoviesSectionTag>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        return (
          <MovieAnchorTag href={`/movies/${id}`} key={id} className='movie' style={{"border-radius": "1.2rem"}}>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <MovieInfoDivTag className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </MovieInfoDivTag>
            </article>
          </MovieAnchorTag>
        )
      })}
    </MoviesSectionTag>
  )
}

export default Movies
