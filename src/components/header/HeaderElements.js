import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom:1px solid #393A3B;
  background-color: #242526;
  z-index:999;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`

const HeaderMiddle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  margin:0 1rem;

  @media (max-width: 900px) {
    display:none;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius:999px;
  height:40px;
  width:100%;
  max-width:240px;
  background-color: #3A3B3C;
  padding:0.25rem 0.5rem;
  color:#A8ABAF;
`

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0.2rem 0.4rem;
  color:white;
  background-color: transparent;
  margin-left: 0.3rem;
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display:grid;
  place-items:center;
  background-color: #3A3B3C;
  color:white;
  border-radius: 50%;
  margin-left:0.5rem;

  .MuiSvgIcon-root {
    width:20px !important;
    height:20px !important;
  }

  @media (max-width: 700px) {
    display:none;
  }
`

const UserContainer = styled.div`
  cursor: pointer;

  .MuiSvgIcon-root {
    width:40px !important;
    height:40px !important;
  }

  @media (max-width: 700px) {
    display:none;
  }
`

const PageIcon = styled.div`
  width:120px;
  height:100%;
  color:#B0B3B8;
  cursor: pointer;
  display:grid;
  place-items: center;
  border-bottom: 2px solid transparent;

  .MuiSvgIcon-root {
    width:30px !important;
    height:30px !important;
  }

  &:hover {
    background-color: #3A3B3C;
  }
`

const Logo = styled.img`
  cursor:pointer;
  width:40px;
  height:40px;
  display:block;
  margin-right:0.5rem;
`

const MenuIcon = styled.div`
  display:none;
  height:40px;
  width:40px;
  cursor:pointer;
  color:#B0B3B8;

  @media (max-width: 900px) {
    display:block;
    display:grid;
    place-items: center;
  }
`

export {
  Container,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  InputContainer,
  Input,
  IconContainer,
  UserContainer,
  PageIcon,
  Logo,
  MenuIcon
}