import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
`

const SponsoredContainer = styled.div`
  display:flex;
  align-items:center;
  border-radius:0.5rem;
  padding:0.5rem;
  cursor:pointer;

  &:hover {
    background-color:#3A3B3C;
  }
`

const Image = styled.img`
  display:block;
  height:100%;
  width:100%;
  max-width:100px;
  object-fit:cover;
  border-radius:0.5rem
`

const Description = styled.p`
  color:white;
  margin-left:0.5rem;
  font-weight:500;
`

export {
  Container,
  SponsoredContainer,
  Image,
  Description,
}