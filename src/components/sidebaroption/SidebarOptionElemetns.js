import styled from 'styled-components'

const SidebarOptionContainer = styled.div`
  width:100%;
  max-width:350px;
  display:flex;
  align-items:center;
  border-radius:0.5rem;
  cursor:pointer;
  padding:0.5rem 0.5rem;

  &:hover {
    background-color: #3A3B3C;
  }
`

const SidebarOptionImg = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
`

const SidebarOptionText = styled.h3`
  color: white;
  font-size:1rem;;
  font-weight:500;
  margin-left:0.5rem;
`

export {
  SidebarOptionContainer,
  SidebarOptionImg,
  SidebarOptionText,
}