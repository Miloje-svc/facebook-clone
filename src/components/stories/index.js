import {
  Container,
  Story,
  StoryImage,
  AvatarContainer,
  Title,
} from './StoriesElemetns'
import { stories } from '../../assets/data/stories'
import { Avatar } from '@material-ui/core'

const Stories = () => {
  return (
    <Container>
      {stories.map(story => (
        <Story key={story.id}>
          <AvatarContainer>
            <Avatar src={story.avatar} />
          </AvatarContainer>
          <StoryImage src={story.story} />
          <Title>{story.username}</Title>
        </Story>
      ))}
    </Container>
  )
}

export default Stories
