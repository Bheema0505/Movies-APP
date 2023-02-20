import styled, { keyframes } from "styled-components";

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingDivTag = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: var(--clr-primary-5);
  animation: ${loading} 0.6s linear infinite;
`

export const MovieInfoDivTag = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: #FCC2FC;
  transform: translateY(100%);
  transition: var(--transition);
  & h4 {
    ${'' /* color: var(--clr-white); */}
    color: brown;
    margin-bottom: 0.25rem;
  }
  & p {
    margin-bottom: 0;
    ${'' /* color: var(--clr-white); */}
    color: black;
    font-weight: 600;

  }
`

// export const MovieAnchorTag = styled.a`
//   position: relative;
//   overflow: hidden;
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

export const MovieArticleTag = styled.article`
  position: relative;
  overflow: hidden;
  margin: 0 2rem;
  border-radius: 1.2rem;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.5);
  @media (min-width: 450px) and (max-width: 665px) {
    margin: 0 6rem;
  }
  & img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }
  &:hover ${MovieInfoDivTag} {
  transform: translateY(0);
}
`

export const MovieAnchorTag = styled.div`
& Link{
  position: relative;
  overflow: hidden;
  margin: 0 2rem;
  border-radius: 1.2rem;

  @media (min-width: 450px) and (max-width: 665px) {
    margin: 0 6rem;
  }
  & img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }
  &:hover ${MovieInfoDivTag} {
  transform: translateY(0);
}
}
`

export const MoviesSectionTag = styled.section`
  width: 90vw;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 5rem;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 3rem;
`

