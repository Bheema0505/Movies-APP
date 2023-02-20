import React from 'react'
import { useGlobalContext } from './context'
import { LoadingDivTag, MoviesSectionTag, MovieInfoDivTag, MovieArticleTag } from './MoviesStyles'
import { Link } from 'react-router-dom'
import ImageNotAvailable from './assets/ImageNotAvailable.svg'

// const url ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

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
          <Link to={`/movies/${id}`} key={id}>
            <MovieArticleTag>
              <img src={poster === 'N/A' ? ImageNotAvailable : poster} alt={title} />
              <MovieInfoDivTag >
                <h4>{title}</h4>
                <p>{year}</p>
              </MovieInfoDivTag>
            </MovieArticleTag>
          </Link>
        )
      })}
    </MoviesSectionTag>
  )
}

export default Movies
