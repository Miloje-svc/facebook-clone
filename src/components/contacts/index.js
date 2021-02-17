import {
  Container,
  Header,
  HeaderLeft,
  Title,
  HeaderRight,
  IconContainer,
  ContactContainer,
  Username,
} from './ContactsElements'
import { Avatar } from '@material-ui/core'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded'
import { contacts } from '../../assets/data/contacts'

const Contacts = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Title>Contacts</Title>
        </HeaderLeft>

        <HeaderRight>
          <IconContainer>
            <VideoCallRoundedIcon />
          </IconContainer>

          <IconContainer>
            <SearchRoundedIcon />
          </IconContainer>

          <IconContainer>
            <MoreHorizRoundedIcon />
          </IconContainer>
        </HeaderRight>
      </Header>

      {contacts.map(contact => (
        <ContactContainer>
          <Avatar src={contact.img} />
          <Username>{contact.name}</Username>
        </ContactContainer>
      ))}
    </Container>
  )
}

export default Contacts
