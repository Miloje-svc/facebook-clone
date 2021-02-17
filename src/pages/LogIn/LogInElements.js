import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #18191A;
`

const Logo = styled.img`
  display: block;
  width:150px;
  height:150px;
  margin-bottom:2rem;
`

const LogInBtn = styled.button`
  width:250px;
  height:40px;
  cursor:pointer;
  border:none;
  outline:none;
  border-radius: 999px;
  background-color: #4599FF;
  color:white;
`

export { Container, Logo, LogInBtn } 