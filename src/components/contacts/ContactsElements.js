import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin-left:auto;
`

const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  margin:0.5rem 0;
`

const HeaderLeft = styled.div`
  width:100%;
  margin-left:0.5rem;
`

const Title = styled.h3`
  color:#86888B;
  font-size:1.2rem;
  font-weight:500;
`

const HeaderRight = styled.div`
  display:flex;
  align-items:center;
`

const IconContainer = styled.div`
  width:30px;
  height:30px;
  border-radius:50%;
  color: #A8ABAF;
  cursor:pointer;
  display:grid;
  place-items:center;
  margin-left:0.3rem;

  &:hover {
    background-color: #3A3B3C;
  }
`

const ContactContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;

  &:hover {
      background-color: #3A3B3C;
  }
`

const Username = styled.p`
  color:white;
  font-size:1rem;
  font-weight:500;
  margin-left:0.5rem;
`

export {
  Container,
  Header,
  HeaderLeft,
  Title,
  HeaderRight,
  IconContainer,
  ContactContainer,
  Username,
}