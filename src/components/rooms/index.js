import faker from 'faker'
import {
  Container,
  CreateRoom,
  Text,
  AvatarsContainer
} from './RoomsElements'
import { Avatar } from '@material-ui/core'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'

const people = [...Array(20).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    avatar: `https://randomuser.me/api/portraits/${faker.helpers.randomize(["women", "men"])}/${faker.random.number(60)}.jpg`
  }
})

const Rooms = () => {
  return (
    <Container>
      <CreateRoom>
        <VideoCallRoundedIcon />
        <Text>Create Room</Text>
      </CreateRoom>

      <AvatarsContainer>
        {people.map(person => <Avatar key={person.id} src={person.avatar} />)}
      </AvatarsContainer>
    </Container>
  )
}

export default Rooms
