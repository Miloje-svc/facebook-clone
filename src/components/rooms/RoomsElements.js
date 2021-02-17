import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 680px;
  border-radius:0.5rem;
  background-color: #242526;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  display:flex;
  align-items:center;
  overflow-x:scroll;
`

const CreateRoom = styled.div`
  min-width: 150px;
  height:40px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 999px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid #263951;
  margin-right:1rem;

  .MuiSvgIcon-root {
    color:#804FB5;
  }

  &:hover {
    background-color: #4E4F50;
  }
`

const Text = styled.h3`
  color: #4494F6;
  font-size:1rem;
  font-weight:500;
  margin-left:0.3rem;
`

const AvatarsContainer = styled.div`
  width: 100%;
  display:flex;
  align-items:center;

  .MuiAvatar-root  {
    margin-right: 0.5rem;
  }
`

export {
  Container,
  CreateRoom,
  Text,
  AvatarsContainer
}