import React from 'react'
import { useParams} from 'react-router-dom'
import { LoadingDivTag } from './MoviesStyles'
import { SingleMovieSectionTag, SingleMovieImageDivTag, SingleMovieImbdDivTag, SingleMovieInfoTag, SingleMovieTitleDiv, SingleMovieInfoDivTag, SingleMovieParaTag, SingleMovieLinkDivTag, SingleMoviePageErrorDivTag } from './SingleMovieStyles'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <LoadingDivTag></LoadingDivTag>
  }
  if (error.show) {
    return (
      <SingleMoviePageErrorDivTag>
        <h1>{error.msg}</h1>
        <Link to='/'>
          back to movies
        </Link>
      </SingleMoviePageErrorDivTag>
    )
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year, Genre, Director, Writer, Actors, Runtime, imdbRating } = movie
  return (
    <SingleMovieSectionTag>
      <SingleMovieImageDivTag><img src={poster} alt={title} /></SingleMovieImageDivTag>
      <SingleMovieInfoDivTag>
        <div>
          <SingleMovieTitleDiv><h2>{title}</h2> <h3>({year})</h3></SingleMovieTitleDiv>
          <SingleMovieImbdDivTag style={{ "color": "black" }}> IMDB Rating :<span> {imdbRating} / 10 </span></SingleMovieImbdDivTag>
          <SingleMovieParaTag>{plot}</SingleMovieParaTag>
        {/* </div> */}
        {/* <div> */}
          <SingleMovieInfoTag><h4>Runtime : </h4> {Runtime}</SingleMovieInfoTag>
          <SingleMovieInfoTag><h4>Genre : </h4> {Genre}</SingleMovieInfoTag>
          <SingleMovieInfoTag><h4>Director : </h4> {Director}</SingleMovieInfoTag>
          <SingleMovieInfoTag><h4>Writer : </h4> {Writer}</SingleMovieInfoTag>
          <SingleMovieInfoTag><h4>Cast : </h4> {Actors}</SingleMovieInfoTag>
        </div>
        {/* <div> */}
          <SingleMovieLinkDivTag>
          <Link to='/'>
            back to movies 
            </Link>
          </SingleMovieLinkDivTag>
        {/* </div> */}
      </SingleMovieInfoDivTag>
    </SingleMovieSectionTag>
  )
}

export default SingleMovie
