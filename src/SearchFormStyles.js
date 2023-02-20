import styled from "styled-components";

export const SearchFormTag = styled.form`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`
export const SearchFormInputTag = styled.input`
  width: 100%;
  border: 1px solid #FCC2FC;
  max-width: 400px;
  background: var(--clr-white);
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: var(--radius);
  color: var(--clr-grey-3);
  letter-spacing: var(--spacing);
  margin-top: 1rem;
`
export const SearchFormErrorDivTag = styled.div`
  color: var(--clr-red-dark);
  text-transform: capitalize;
  padding-top: 0.5rem;
  letter-spacing: var(--spacing);
`