import {
  SidebarOptionContainer,
  SidebarOptionImg,
  SidebarOptionText,
} from './SidebarOptionElemetns'

const SidebarOption = ({ text, img, onclick }) => {
  return (
    <SidebarOptionContainer onClick={onclick}>
      {img !== "" && <SidebarOptionImg src={img} alt={text} />}
      <SidebarOptionText>{text}</SidebarOptionText>
    </SidebarOptionContainer>
  )
}

export default SidebarOption
