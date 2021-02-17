import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { auth } from '../../firebase/index.js'
import {
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
} from './HeaderElements.js'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MessageIcon from '@material-ui/icons/Message'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import GamesRoundedIcon from '@material-ui/icons/GamesRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

const Header = () => {
  const user = useSelector(state => state.user)

  return (
    <Container>
      <HeaderLeft>
        <Logo src={require("../../assets/images/facebook-logo-png-38360.png").default} />
        <InputContainer>
          <SearchRoundedIcon />
          <Input placeholder="Search Facebook" />
        </InputContainer>
      </HeaderLeft>

      <HeaderMiddle>
        <PageIcon style={{ borderBottomColor: true && "#2D88FF", color: true && "#2D88FF" }} >
          <HomeRoundedIcon />
        </PageIcon>

        <PageIcon>
          <PeopleAltRoundedIcon />
        </PageIcon>

        <PageIcon>
          <GamesRoundedIcon />
        </PageIcon>
      </HeaderMiddle>

      <HeaderRight>
        <UserContainer onClick={auth.signOut()}>
          <Avatar src={user?.photoURL} alt="" />
        </UserContainer>

        <IconContainer>
          <AddIcon />
        </IconContainer>

        <IconContainer>
          <MessageIcon />
        </IconContainer>

        <IconContainer>
          <NotificationsIcon />
        </IconContainer>

        <IconContainer>
          <KeyboardArrowDownRoundedIcon />
        </IconContainer>

        <MenuIcon>-
          <MenuRoundedIcon />
        </MenuIcon>
      </HeaderRight>
    </Container>
  )
}

export default Header
