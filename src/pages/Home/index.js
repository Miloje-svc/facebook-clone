import {
  Container,
  HomeLeft,
  HomeMiddle,
  HomeRight
} from './HomeElements'
import {
  Rooms,
  Posts,
  CreatePost,
  Stories,
  Contacts,
  Sponsored,
  Sidebar,
  Header,
} from '../../components'
import { withRouter } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeLeft>
          <Sidebar />
        </HomeLeft>

        <HomeMiddle>
          <Stories />
          <CreatePost />
          <Rooms />
          <Posts />
        </HomeMiddle>

        <HomeRight>
          <Sponsored />
          <Contacts />
        </HomeRight>
      </Container>
    </>
  )
}

export default withRouter(Home)
