import React from 'react'
import { useGlobalContext } from './context'
// import { Link } from 'react-router-dom'
import { LoadingDivTag, MoviesSectionTag, MovieInfoDivTag, MovieArticleTag } from './MoviesStyles'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


//   const MovieAnchorTag = styled(Link)`
//   position: relative;
//   overflow: hidden;
//   border-radius: 1.2rem;
//   margin: 0 2rem;
//   @media (min-width: 450px) and (max-width: 665px) {
//     margin: 0 6rem;
//   }
//   & img {
//     width: 100%;
//     height: 400px;
//     display: block;
//     object-fit: cover;
//   }
//   &:hover ${MovieInfoDivTag} {
//   transform: translateY(0);
// }
// `
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
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <MovieInfoDivTag className='movie-info'>
                <h4 className='title'>{title}</h4>
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
