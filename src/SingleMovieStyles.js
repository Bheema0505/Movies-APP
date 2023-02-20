import styled from "styled-components";

export const SingleMovieSectionTag = styled.section`
    display: flex;
    gap: 3rem;
    flex-direction: row;
    margin: 2rem 5rem;
  @media screen and (max-width: 768px) {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`
export const SingleMovieImageDivTag = styled.div`
    height: 600px;
      & img {
        border-radius: 1rem;
    }
`
export const SingleMovieInfoDivTag = styled.div`

    @media screen and (max-width: 768px) {
        max-width: 400px;
    }
`
export const SingleMovieTitleDiv = styled.div`
    & h2{
        display:block ;
        margin-right: 15px;
    }
    & h3{
            display:inline-block ;
            margin-bottom: 15px;
        }

`
export const SingleMovieImbdDivTag = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    ${'' /* margin-bottom: 1rem; */}
    & span{
        color: gold;
    }
`
export const SingleMovieParaTag = styled.p`
    max-width: 35em;
    font-size: 1.2rem;
    margin-top: 0.8rem;
    line-height: 1.6;
`
export const SingleMovieInfoTag = styled.div`
    margin: 0 0 0.3rem 0 ;
        & h4{
            display: inline;
        }
`
export const SingleMovieAnchorTag = styled.div`
 & a{
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    display: inline-block;
    margin-top: 0.5rem;
    letter-spacing: var(--spacing);
}
`
export const SingleMoviePageErrorDivTag = styled.div`
  text-align: center;
  padding: 2rem;

  & a {
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    display: inline-block;
    margin-top: 0.5rem;
    letter-spacing: var(--spacing);
  }
`

