import styled from 'styled-components'

const Container = styled.main`
  width:100%;
  height:100vh;
  display: flex;
  padding:70px 1rem 0 0.5rem;
  background-color:#18191A;
  overflow:hidden;
`

const HomeLeft = styled.section`
  flex: 0.25;

  @media (max-width:1100px) {
    display:none !important;
  }
`

const HomeMiddle = styled.section`
  flex: 0.5;
  overflow-y:scroll;
  margin:0 1rem;

  @media (max-width:1100px) {
    flex: 0.7 !important;
  }

  @media (max-width:700px) {
       flex: 1 !important;
  }
`

const HomeRight = styled.section`
  flex: 0.25;

  @media (max-width:1100px) {
     flex: 0.3 !important;
  }

  @media (max-width:700px) {
    display:none !important;
  }
`

export {
  Container,
  HomeLeft,
  HomeMiddle,
  HomeRight,
}