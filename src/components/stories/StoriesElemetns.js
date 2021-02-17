import styled from 'styled-components'

const Container = styled.section`
  display:flex;
  align-items:center;
  width:100%;
  margin:1rem auto;
  max-width:680px;
  overflow-x:scroll;
`

const StoryImage = styled.img`
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
  transition:all 300ms ease-in-out;
`

const Story = styled.div`
  border-radius:0.5rem;
  position:relative;
  cursor:pointer;
  overflow:hidden;
  width:100%;
  min-width:110px;
  height:190px;
  margin-right:0.5rem;

  &:hover ${StoryImage} {
    transform:scale(1.1)
  }
`


const AvatarContainer = styled.div`
  width:40px;
  height:40px;
  position:absolute;
  top:0.5rem;
  left:0.5rem;
  cursor:pointer;
  display:grid;
  place-items:center;
  background-color:#297BE5;
  border-radius:50%;
  z-index: 100;

  .MuiAvatar-root {
    width:30px !important;
    height:30px !important;
  }
`

const Title = styled.p`
  position:absolute;
  bottom:0.5rem;
  left:0;
  right:0;
  text-align:center;
  color:white;
  font-weight:500;
  font-size:0.8rem;
`

export {
  Container,
  Story,
  StoryImage,
  AvatarContainer,
  Title,
}