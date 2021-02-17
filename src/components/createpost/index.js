import { faVideo, faPhotoVideo, faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firebaseApp, db } from '../../firebase'
import { useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { useState, } from 'react'
import { Avatar } from '@material-ui/core'
import {
  Container,
  TopContent,
  BottomContent,
  Input,
  Option,
  OptionText,
  PostButton,
  Form,
  OptionContent
} from './CreatePostElements'

const CreatePost = () => {
  const [input, setInput] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const user = useSelector(state => state.user)

  const onSubmit = e => {
    e.preventDefault()
    setInput('')
    setFileUrl('')

    db.collection("posts")
      .add({
        id: uuid(),
        username: user ? user?.displayName : '',
        desc: input,
        comments: 0,
        likes: 0,
        shares: 0,
        images: fileUrl,
        avatar: user ? user?.photoURL : '',
      })
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL())
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TopContent>
          <Avatar src={user?.photoURL} />
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What's on your mind, lemi?" />
          <PostButton disabled={!input} type="submit">Post</PostButton>
        </TopContent>

        <p>{fileUrl}</p>

        <BottomContent>
          <Option>
            <OptionContent>
              <FontAwesomeIcon icon={faVideo} color='#F02849' />
              <OptionText>Live Video</OptionText>
              <Input style={{ width: 0, height: 0 }} />
            </OptionContent>
          </Option>

          <Option>
            <OptionContent>
              <FontAwesomeIcon icon={faPhotoVideo} color="#45BD62" />
              <OptionText>Photo/Video</OptionText>
              <Input type="file" onChange={onFileChange} style={{ width: 0, height: 0 }} />
            </OptionContent>
          </Option>

          <Option>
            <OptionContent>
              <FontAwesomeIcon icon={faLaughBeam} color="#F7B928" />
              <OptionText>Photo/Video</OptionText>
              <Input style={{ width: 0, height: 0 }} />
            </OptionContent>
          </Option>
        </BottomContent>
      </Form>
    </Container>
  )
}

export default CreatePost
